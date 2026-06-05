import {
    Container,
    Header,
    TitleContainer,
    Title,
    BtnBaixar,
    FormContainer,
    Row,
    Input,
    Linha,
    TextArea,
    CheckboxContainer,
    TextLongo,
    TituloExp,
} from "./styles";
import { GrDocumentPdf } from "react-icons/gr";
import { ImProfile } from "react-icons/im";

export function Curriculo(){
    return (
        <Container>
            <Header>
                <TitleContainer>
                    <Title> <ImProfile /> Meu currículo</Title>
                </TitleContainer>

                <BtnBaixar>
                    Baixar  <GrDocumentPdf />
                </BtnBaixar>
            </Header>

            <FormContainer>
                <Row>
                    <Input type="text" placeholder="Nome" />
                    <Input type="text" placeholder="Nome social (opcional)" />
                </Row>

                <Row>
                    <Input type="text" placeholder="Telefone" />
                    <Input type="text" placeholder="Telefone (recado)" />
                </Row>

                <Row>
                    <Input type="text" placeholder="Cidade" />
                    <Input type="text" placeholder="Endereço" />
                </Row>

                <Linha />

                <TextArea type="text" placeholder="Objetivo" />

                <TextArea type="text" placeholder="Formação acadêmica" />

                <Linha />

                <Row>
                    <TituloExp>Experiência profissional</TituloExp>
                    <CheckboxContainer>
                        <input type="checkbox" /> Não tenho
                    </CheckboxContainer>
                </Row>
                <TextLongo type="text" placeholder="Empresa"/>
                <TextLongo type="text" placeholder="Cargo"/>
                <TextLongo type="text" placeholder="Descrição"/>
                <Row>
                    <Input type="text" placeholder="Início"/>
                    <Input type="text" placeholder="Fim"/>
                </Row>

                <Linha />

                <TextArea type="text" placeholder="Qualificações e Cursos Complementares" />
            </FormContainer>
        </Container>
    );
}