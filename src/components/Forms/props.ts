import type { Aluno } from "../../contexts/AlunosContext"

export type Role = "aluno" | "professor" | "secretaria"

export interface BtnProps {
  campoTexto: "cadastro" | "editar" | "cancelar"
}

export interface FormProps {
  modo?: "cadastro" | "editar"
  role?: Role 
  dadosIniciais?: Aluno
}