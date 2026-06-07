// src/pages/Aluno/Curriculo/index.tsx
import { useNavigate } from "react-router-dom"
import Form from "../../../components/Forms"
import { useCurriculo, type DadosCurriculo } from "../../../contexts/CurriculoContext"
import { useEffect } from "react"
import { useAuth } from "../../../contexts/AuthContext"
import { useAlunos } from "../../../contexts/AlunosContext"

export function Curriculo() {
    const { raAtivo } = useAuth()
    const { alunos, editAluno } = useAlunos()
    const { setDados } = useCurriculo()
    const navigate = useNavigate()

    const alunoAtivo = alunos.find(a => a.ra === raAtivo)
    const curriculo = alunoAtivo?.curriculo ?? null

    useEffect(() => {
        if (curriculo) {
            setDados(curriculo)
            navigate("/aluno/curriculo/preview", { replace: true })
        }
    }, []) 

    if (curriculo) return null

    function handleCriar(data: Record<string, string>) {
        const novosCurriculo = data as unknown as DadosCurriculo
        if (alunoAtivo) {
            editAluno({ ...alunoAtivo, curriculo: novosCurriculo })
        }
        setDados(novosCurriculo)
        navigate("/aluno/curriculo/preview")
    }


    return <Form role="curriculo" onSubmitExterno={handleCriar} />
}