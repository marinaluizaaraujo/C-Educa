import type { UserRole } from "../../@types/auth";
import {
    IconTurmas,
    IconPerfil,
    IconHome,
    IconCurriculo,
    IconGroup,
    IconEmpresas,
    IconVagas,
} from "./styles";

type MenuItem = {
    name: string;

    path: string;

    icon: React.ElementType;
};

export const menus:Record<UserRole, MenuItem[]> = {
    aluno: [
        {
            name: "Inicio",
            path: "/aluno",
            icon: IconHome,
        },

        {
            name: "Perfil",
            path: "/aluno/perfil",
            icon: IconPerfil,
        },

        {
            name: "Curriculo",
            path: "/aluno/curriculo",
            icon: IconCurriculo,
        },
    ],

    professor: [
        {
            name: "Inicio",
            path: "/professor",
            icon: IconHome,
        },

        {
            name: "Turmas",
            path: "/professor/turmas",
            icon: IconTurmas,
        },

        {
            name: "Anotacao",
            path: "/professor/anotacao",
            icon: IconGroup,
        },
    ],

    secretaria: [
        {
            name: "Inicio",
            path: "/secretaria",
            icon: IconHome,
        },

        {
            name: "Turmas",
            path: "/secretaria/listaDeTurmas",
            icon: IconTurmas,
        },

        {
            name: "Alunos",
            path: "/secretaria/alunos",
            icon: IconGroup,
        },
        {
            name: "Empresas",
            path: "/secretaria/empresas",
            icon: IconEmpresas,
        },
        {
            name: "Vagas",
            path: "/secretaria/vagas",
            icon: IconVagas,
        },
    ],
};