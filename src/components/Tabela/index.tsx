
import FiltroBusca from "../FiltroBusca"
import { Container, Espaco, Header, Row, TitleContainer } from "./style"

export default function Tabela() {
    return (

        <Container>
            <Header>
                <TitleContainer>
                    <Espaco> Lista de Alunos </Espaco>
                </TitleContainer>
            </Header>
            <Row>
                <FiltroBusca/>
            </Row>
                

                </Container>

                )
}
