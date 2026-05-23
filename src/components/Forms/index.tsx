
import { FormContainer, FormGroup, FullWidth, Select } from "./styles";
import Input from "../Input";

export default function Form() {
    return (
        <FormContainer>
            <label>Dados Pessoais</label>
            <br />

            <FullWidth>
                <label>Nome</label>
                <Input
                    size="large"
                    type="text"
                    placeholder="Digite seu nome"
                />
            </FullWidth>

            <FullWidth>
                <label>Nome Social</label>
                <Input
                    size="large"
                    type="text"
                    placeholder="Digite seu nome social"
                />
            </FullWidth>

            <FormGroup>
            <label>Data de Nascimento</label>
            <Input
                type="date"
                size="small"
            />
            </FormGroup>

            <FormGroup>
                <label>CPF</label>
                <Input
                    size="small"
                    type="number"
                    placeholder="Digite seu CPF"
                />
            </FormGroup>

            <FormGroup>
                <label>RG</label>
                <Input
                    size="small"
                    type="number"
                    placeholder="Digite seu RG"
                />
            </FormGroup>
            

            <FormGroup>
                <label>Gênero</label>
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
            </FormGroup>

            <FormGroup>
            <label>Responsável 1</label>
            <Input
                size="large"
                type="text"
                placeholder="Digite o nome do responsável"
            />
            </FormGroup>
            

            <FormGroup>
<label>Responsável 2</label>
            <Input
                size="large"
                type="text"
                placeholder="Digite o nome do responsável"
            />
            </FormGroup>
            
            <FormGroup>
<label>Contato 1</label>
            <Input
                size="large"
                type="text"
                placeholder="Digite o telefone"
            />
            </FormGroup>
            

            <FormGroup>
                <label>Contato 2</label>
                <Input
                    size="large"
                    type="text"
                    placeholder="Digite o telefone"
                />
            </FormGroup>


            <FormGroup>
                <label>Email</label>
                <Input
                    size="large"
                    type="email"
                    placeholder="Digite seu email"
                />
            </FormGroup>


        </FormContainer>
    )
}

