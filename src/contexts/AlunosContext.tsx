import { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react"
import { gerarRA } from "../utils/gerarRA"
import type { DadosCurriculo } from "./CurriculoContext"
import { alunosMock } from "../mocks/alunosMocks"

export interface Aluno {
    ra: string
    nome: string
    nomeSocial?: string
    nascimento: string
    cpf: string
    rg: string
    email: string
    responsavel1: string
    telefone1: string
    responsavel2?: string
    telefone2?: string
    emailResp?: string
    cep: string
    rua: string
    numero: string
    bairro: string
    cidade: string
    estado: string
    complemento?: string
    curso: string
    turma: string
    turno: string
    dataMatricula: string
    curriculo?: DadosCurriculo
}

type Action =
    | { type: "ADD"; payload: Aluno }
    | { type: "EDIT"; payload: Aluno }
    | { type: "REMOVE"; payload: string }

function reducer(state: Aluno[], action: Action): Aluno[] {
    switch (action.type) {
        case "ADD": return [...state, action.payload]
        case "EDIT": return state.map(a => a.ra === action.payload.ra ? action.payload : a)
        case "REMOVE": return state.filter(a => a.ra !== action.payload)
        default: return state
    }
}

interface AlunosContextType {
    alunos: Aluno[]
    alunosFiltrados: Aluno[]
    addAluno: (aluno: Omit<Aluno, "ra">) => void
    editAluno: (aluno: Aluno) => void
    removeAluno: (ra: string) => void
    busca: string
    setBusca: (v: string) => void
    cursosSelecionados: string[]
    turnosSelecionados: string[]
    setCursosSelecionados: (v: string[]) => void
    setTurnosSelecionados: (v: string[]) => void
}

const AlunosContext = createContext({} as AlunosContextType)

const STORAGE_KEY = "educandario:alunos"

function carregarEstadoInicial(): Aluno[] {
    const salvo = localStorage.getItem(STORAGE_KEY)
    if (salvo) {
        try {
            return JSON.parse(salvo)
        } catch {
            return alunosMock
        }
    }
    return alunosMock
}


export function AlunosProvider({ children }: { children: React.ReactNode }) {
    const [alunos, dispatch] = useReducer(reducer, undefined, carregarEstadoInicial)

    const [busca, setBusca] = useState("")
    const [cursosSelecionados, setCursosSelecionados] = useState<string[]>([])
    const [turnosSelecionados, setTurnosSelecionados] = useState<string[]>([])

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(alunos))
    }, [alunos])

    const alunosFiltrados = useMemo(() => {
        return alunos.filter(aluno => {
            const buscaOk = busca.trim() === "" ||
                aluno.nome.toLowerCase().includes(busca.toLowerCase())

            const cursoOk = cursosSelecionados.length === 0 ||
                cursosSelecionados.includes(aluno.curso)

            const turnoOk = turnosSelecionados.length === 0 ||
                turnosSelecionados.includes(aluno.turno)

            return buscaOk && cursoOk && turnoOk
        })
    }, [alunos, busca, cursosSelecionados, turnosSelecionados])

    function addAluno(data: Omit<Aluno, "ra">) {
        dispatch({
            type: "ADD",
            payload: { ...data, ra: gerarRA() },
        })
    }

    function editAluno(aluno: Aluno) {
        dispatch({ type: "EDIT", payload: aluno })
    }

    function removeAluno(ra: string) {
        dispatch({ type: "REMOVE", payload: ra })
    }

    return (
        <AlunosContext.Provider value={{
            alunos, alunosFiltrados,
            addAluno, editAluno, removeAluno,
            busca, setBusca,
            cursosSelecionados, setCursosSelecionados,
            turnosSelecionados, setTurnosSelecionados,
        }}>
            {children}
        </AlunosContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAlunos() {
    return useContext(AlunosContext)
}