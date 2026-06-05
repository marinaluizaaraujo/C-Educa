import { Link } from "react-router-dom";
import { Btn, ButtonContainer, Container } from "./style";
import Tabela from "../../../components/Tabela";

export default function Alunos() {
  return (
    <Container>
      <ButtonContainer>
        <Link to="/secretaria/alunos/cadastrar">
          <Btn>Cadastrar Aluno</Btn>
        </Link>
      </ButtonContainer>
      <Tabela />
    </Container>
  );
}