import { Outlet } from "react-router-dom";

import { Nav } from "../../components/Nav";
import { Container, Content } from "./styles";

export function AlunoLayout() {
    return (
        <Container>
            <Nav role="aluno" />

            <Content>
                <Outlet />
            </Content>
        </Container>
    );
}