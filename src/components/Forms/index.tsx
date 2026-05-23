
import { Container, FormContainer, Header, Select, Espaco, TitleContainer, Subtitle, Row, InputDate, Linha, TextArea, ButtonContainer, Btn } from "./styles";
import Input from "../Input";


export default function Form() {
    return (
        <Container>
            <Header>
                <TitleContainer>
                    <Espaco> </Espaco>
                </TitleContainer>
            </Header>

            <FormContainer>
                <Subtitle>Dados Pessoais</Subtitle>

                <Row>
                    <Input
                        size="large"
                        type="text"
                        placeholder="Nome"
                    />

                    <Input
                        size="large"
                        type="text"
                        placeholder="Nome Social (Opcional)"
                    />
                </Row>

                <Row>
                    <InputDate
                        type="text"
                        placeholder="Data de Nascimento"
                        onFocus={(e) => e.target.type = 'date'}
                        onBlur={(e) => {
                            if (!e.target.value) {
                                e.target.type = 'text'
                            }
                        }}
                    />
                    <Input
                        size="large"
                        type="number"
                        placeholder="CPF"
                    />
                </Row>

                <Row>
                    <Input
                        size="large"
                        type="number"
                        placeholder="RG"
                    />

                    <Select defaultValue="">
                        <option value="" disabled>
                            Selecione o gênero
                        </option>

                        <option value="feminino">
                            Feminino
                        </option>

                        <option value="masculino">
                            Masculino
                        </option>

                        <option value="outro">
                            Outro
                        </option>
                    </Select>
                </Row>

                <Row>
                    <Input
                        size="large"
                        type="text"
                        placeholder="Responsável 1"
                    />

                    <Input
                        size="large"
                        type="text"
                        placeholder="Telefone 1"
                    />
                </Row>

                <Row>
                    <Input
                        size="large"
                        type="text"
                        placeholder="Responsável 2"
                    />

                    <Input
                        size="large"
                        type="text"
                        placeholder="Telefone 2"
                    />
                </Row>

                <Row>
                    <Input
                        size="large"
                        type="email"
                        placeholder="Email Aluno"
                    />
                    <Input
                        size="large"
                        type="email"
                        placeholder="Email Responsável"
                    />
                </Row>
                <Linha></Linha>
                <Subtitle>Endereço</Subtitle>
                <Row>
                    <Input
                        size="large"
                        type="number"
                        placeholder="CEP"
                    />

                    <Input
                        size="large"
                        type="text"
                        placeholder="Rua"
                    />
                </Row>
                <Row>
                    <Input
                        size="large"
                        type="number"
                        placeholder="Número"
                    />
                    <Input
                        size="large"
                        type="text"
                        placeholder="Bairo"
                    />
                </Row>
                <Row>
                    <Input
                        size="large"
                        type="text"
                        placeholder="Cidade"
                    />
                    <Input
                        size="large"
                        type="text"
                        placeholder="Estado"
                    />
                </Row>
                <Row>
                    <Input
                        size="large"
                        type="text"
                        placeholder="Complemento"
                    />
                </Row>
                <Linha></Linha>
                <Subtitle> Dados Escolares</Subtitle>
                <Row>
                    <Select defaultValue="">
                        <option value="" disabled>
                            Selecione o Curso
                        </option>

                        <option value="adm">
                            Administração
                        </option>

                        <option value="programacao">
                            Programação
                        </option>

                        <option value="confeitaria">
                            Confeitaria
                        </option>
                    </Select>

                    <Select defaultValue="">
                        <option value="" disabled>
                            Selecione a Turno
                        </option>

                        <option value="manha">
                            Manha
                        </option>

                        <option value="tarde">
                            Tarde
                        </option>

                        <option value="noite">
                            Noite
                        </option>
                    </Select>
                </Row>
                <Row>
                    <Select defaultValue="">
                        <option value="" disabled>
                            Selecione a Turma
                        </option>

                        <option value="turma1">
                            Turma 1
                        </option>

                        <option value="turma2">
                            Turma 2
                        </option>

                        <option value="turma3">
                            Turma 3
                        </option>
                    </Select>
                    <InputDate
                        type="text"
                        placeholder="Data de Matrícula"
                        onFocus={(e) => e.target.type = 'date'}
                        onBlur={(e) => {
                            if (!e.target.value) {
                                e.target.type = 'text'
                            }
                        }}
                    />
                </Row>
                <Linha></Linha>
                <Row>
                    <TextArea placeholder="Observações" />
                </Row>
                <ButtonContainer>
                    <Btn>
                        Cancelar
                    </Btn>
                    <Btn>
                        Cadastrar
                    </Btn> 
                    
                </ButtonContainer>
                <ButtonContainer>
                    
                </ButtonContainer>
            </FormContainer>
        </Container>
    )
}

