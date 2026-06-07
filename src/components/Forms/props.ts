export type Role = "aluno" | "professor" | "secretaria" | "curriculo"

export interface BtnProps {
  campoTexto: "cadastro" | "editar" | "cancelar"
}

export interface FormProps {
  modo?: "cadastro" | "editar"
  role?: Role
  dadosIniciais?: Record<string, unknown>
  onSubmitExterno?: (data: Record<string, string>) => void
}