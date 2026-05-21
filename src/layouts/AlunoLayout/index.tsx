import { Outlet } from "react-router-dom";

import { Nav } from "../../components/Nav";

export function AlunoLayout() {
    return (
        <>
            <Nav role="aluno" />

            <Outlet />
        </>
    );
}