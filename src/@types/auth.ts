export type UserRole =
    | "aluno"
    | "professor"
    | "secretaria";

export type User = {
    id: number;

    name: string;

    role: UserRole;

    token: string;
};