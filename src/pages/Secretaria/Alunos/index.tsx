import { Link } from "react-router-dom";
import { Btn, ButtonContainer } from "./style";



export default function Alunos() {
    return (

        <>
            <ButtonContainer>
                <Link to="/secretaria/alunos/cadastrar">
                    <Btn>
                    Cadastrar Aluno
                </Btn>
                </Link>

                <Link to="/secretaria/alunos/editar">
                    
                <Btn>
                    Editar Aluno
                </Btn>
                </Link>
                
            </ButtonContainer>
        </>

    )
}
