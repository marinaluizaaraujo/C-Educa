import { useLocation } from "react-router-dom";
import Form from "../../../../components/Forms";
import type { Aluno } from "../../../../contexts/AlunosContext";

export default function EditarAluno() {
    const { state } = useLocation()
    const aluno = state as Aluno | undefined

    return (
        <Form
            role="aluno"
            modo="editar"
            dadosIniciais={aluno}
        />
    )
}