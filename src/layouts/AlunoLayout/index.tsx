import { Outlet } from "react-router-dom";

import { Nav } from "../../components/Nav";
import { Container, Content } from "./styles";
import { CurriculoProvider } from "../../contexts/CurriculoContext";
import { AuthProvider } from "../../contexts/AuthContext";

export function AlunoLayout() {
    return (
        <AuthProvider>
            <CurriculoProvider>
                <Container>
                    <Nav role="aluno" />
                    <Content>
                        <Outlet />
                    </Content>
                </Container>
            </CurriculoProvider>
        </AuthProvider>
    );
}