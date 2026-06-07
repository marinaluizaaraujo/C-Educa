import { useLocation, useNavigate } from "react-router-dom"
import Form from "../../../components/Forms"
import { useCurriculo, type DadosCurriculo } from "../../../contexts/CurriculoContext"
import { useAuth } from "../../../contexts/AuthContext"
import { useAlunos } from "../../../contexts/AlunosContext"

export function EditarCurriculo() {
    const { state } = useLocation()
    const dados = state as DadosCurriculo | undefined
    const { raAtivo } = useAuth()
    const { alunos, editAluno } = useAlunos()
    const { setDados } = useCurriculo()
    const navigate = useNavigate()

    if (!dados) {
        navigate("/aluno/curriculo")
        return null
    }

    function handleEditar(data: Record<string, string>) {
        const editado = data as unknown as DadosCurriculo
        const alunoAtivo = alunos.find(a => a.ra === raAtivo)

        if (alunoAtivo) {
            editAluno({ ...alunoAtivo, curriculo: editado })
        }
        setDados(editado)
        navigate("/aluno/curriculo/preview")
    }

    return (
        <Form
            role="curriculo"
            modo="editar"
            dadosIniciais={dados as unknown as Record<string, unknown>}
            onSubmitExterno={handleEditar}
        />
    )
}