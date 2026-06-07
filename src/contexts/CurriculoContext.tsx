import { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"

export interface DadosCurriculo {
    nome: string
    nomeSocial?: string
    telefone: string
    telefoneRecado?: string
    cidade: string
    endereco: string
    objetivo: string
    formacao: string
    semExperiencia?: boolean
    empresa?: string
    cargo?: string
    descricao?: string
    expInicio?: string
    expFim?: string
    qualificacoes: string
}

interface CurriculoContextType {
    dados: DadosCurriculo | null
    setDados: (d: DadosCurriculo | null) => void
}

const CurriculoContext = createContext({} as CurriculoContextType)

export function CurriculoProvider({ children }: { children: ReactNode }) {
    const [dados, setDados] = useState<DadosCurriculo | null>(null)

    return (
        <CurriculoContext.Provider value={{ dados, setDados }}>
            {children}
        </CurriculoContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCurriculo() {
    return useContext(CurriculoContext)
}