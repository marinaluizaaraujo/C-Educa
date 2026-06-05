import type { Role } from "./props"

export type FieldType = "text" | "email" | "number" | "date" | "select" | "textarea"

export interface FieldConfig {
    name: string
    placeholder: string
    type: FieldType
    full?: boolean
    readonly?: boolean
    options?: { value: string; label: string }[]
}

export interface SectionConfig {
    title: string
    fields: FieldConfig[][]
}

export const formConfigByRole: Record<Role, SectionConfig[]> = {
    aluno: [
        {
            title: "Dados Pessoais",
            fields: [
                [
                    { name: "nome", placeholder: "Nome", type: "text" },
                    { name: "nomeSocial", placeholder: "Nome Social (Opcional)", type: "text" },
                ],
                [
                    { name: "nascimento", placeholder: "Data de Nascimento", type: "date" },
                    { name: "cpf", placeholder: "CPF", type: "text", readonly: true },
                ],
                [
                    { name: "rg", placeholder: "RG", type: "text", readonly: true },
                    { name: "email", placeholder: "Email Aluno", type: "email" },
                ],
                [
                    { name: "responsavel1", placeholder: "Responsável 1", type: "text" },
                    { name: "telefone1", placeholder: "Telefone 1", type: "text" },
                ],
                [
                    { name: "responsavel2", placeholder: "Responsável 2", type: "text" },
                    { name: "telefone2", placeholder: "Telefone 2", type: "text" },
                ],
                [
                    { name: "emailResp", placeholder: "Email Responsável", type: "email", full: true },
                ],
            ],
        },
        {
            title: "Endereço",
            fields: [
                [
                    { name: "cep", placeholder: "CEP", type: "text" },
                    { name: "rua", placeholder: "Rua", type: "text" },
                ],
                [
                    { name: "numero", placeholder: "Número", type: "number" },
                    { name: "bairro", placeholder: "Bairro", type: "text" },
                ],
                [
                    { name: "cidade", placeholder: "Cidade", type: "text" },
                    { name: "estado", placeholder: "Estado", type: "text" },
                ],
                [
                    { name: "complemento", placeholder: "Complemento", type: "text", full: true },
                ],
            ],
        },
        {
            title: "Dados Escolares",
            fields: [
                [
                    {
                        name: "curso", placeholder: "Selecione o Curso", type: "select",
                        options: [
                            { value: "adm", label: "Administração" },
                            { value: "programacao", label: "Programação" },
                            { value: "confeitaria", label: "Confeitaria" },
                        ],
                    },
                    {
                        name: "turno", placeholder: "Selecione o Turno", type: "select",
                        options: [
                            { value: "manha", label: "Manhã" },
                            { value: "tarde", label: "Tarde" },
                            { value: "noite", label: "Noite" },
                        ],
                    },
                ],
                [
                    {
                        name: "turma", placeholder: "Selecione a Turma", type: "select",
                        options: [
                            { value: "turma1", label: "Turma 1" },
                            { value: "turma2", label: "Turma 2" },
                            { value: "turma3", label: "Turma 3" },
                        ],
                    },
                    { name: "dataMatricula", placeholder: "Data de Matrícula", type: "date" },
                ],
                [
                    { name: "observacoes", placeholder: "Observações", type: "textarea", full: true },
                ],
            ],
        },
    ],

    professor: [
        {
            title: "Dados Pessoais",
            fields: [
                [
                    { name: "nome", placeholder: "Nome", type: "text" },
                    { name: "cpf", placeholder: "CPF", type: "number" },
                ],
                [
                    { name: "nascimento", placeholder: "Data de Nascimento", type: "date" },
                    { name: "email", placeholder: "Email", type: "email" },
                ],
            ],
        },
        {
            title: "Dados Profissionais",
            fields: [
                [
                    {
                        name: "disciplina", placeholder: "Disciplina", type: "select",
                        options: [
                            { value: "matematica", label: "Matemática" },
                            { value: "portugues", label: "Português" },
                            { value: "ciencias", label: "Ciências" },
                        ],
                    },
                    { name: "matricula", placeholder: "Matrícula", type: "text" },
                ],
                [
                    { name: "telefone", placeholder: "Telefone", type: "text" },
                ],
            ],
        },
    ],

    secretaria: [
        {
            title: "Dados Pessoais",
            fields: [
                [
                    { name: "nome", placeholder: "Nome", type: "text" },
                    { name: "cpf", placeholder: "CPF", type: "number" },
                ],
                [
                    { name: "email", placeholder: "Email para login", type: "email", full: true },
                ],
            ],
        },
        {
            title: "Dados de Acesso",
            fields: [
                [
                    {
                        name: "cargo", placeholder: "Cargo / Função", type: "select",
                        options: [
                            { value: "secretario", label: "Secretário(a)" },
                            { value: "coordenador", label: "Coordenador(a)" },
                            { value: "diretor", label: "Diretor(a)" },
                        ],
                    },
                    { name: "admissao", placeholder: "Data de Admissão", type: "date" },
                ],
            ],
        },
    ],
}