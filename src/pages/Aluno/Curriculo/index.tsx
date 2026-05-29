import {
    Container,
    Header,
    TitleContainer,
    Title,
    BtnBaixar,
    FormContainer,
    Row,
    Input,
    Select,
    Linha,
    TextArea,
    CheckboxContainer,
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
                    <Input type="date" />

                    <Select>
                        <option>Gênero</option>
                        <option>Masculino</option>
                        <option>Feminino</option>
                        <option>Outro</option>
                    </Select>
                </Row>

                <Row>
                    <Input type="text" placeholder="Cidade" />
                    <Input type="text" placeholder="Endereço" />
                </Row>

                <Linha />

                <TextArea placeholder="Objetivo" />

                <TextArea placeholder="Formação acadêmica" />

                <Linha />

                <TextArea placeholder="Experiência profissional" />
                <CheckboxContainer>
                    <input type="checkbox" />
                    Não tenho
                </CheckboxContainer>

                <TextArea placeholder="Qualificações e Cursos Complementares" />
            </FormContainer>
        </Container>
    );
}