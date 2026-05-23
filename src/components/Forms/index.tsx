
import { Container, FormContainer, Header, Select, Espaco, TitleContainer, Subtitle, Row, InputDate } from "./styles";
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
                        placeholder="Digite seu nome social"
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
                        placeholder="Digite seu RG"
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
                        placeholder="Digite o nome do responsável"
                    />

                    <Input
                        size="large"
                        type="text"
                        placeholder="Digite o telefone"
                    />

                </Row>

                <Row>
                    <Input
                        size="large"
                        type="text"
                        placeholder="Digite o nome do responsável"
                    />

                    <Input
                        size="large"
                        type="text"
                        placeholder="Digite o telefone"
                    />

                </Row>

                <Row>
                    <Input
                        size="large"
                        type="email"
                        placeholder="Digite seu email"
                    />
                    <Input
                        size="large"
                        type="email"
                        placeholder="Digite seu email"
                    />

                </Row>


            </FormContainer>

        </Container>
    )
}

