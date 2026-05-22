import styled from "styled-components";
import fundoLogin from "../../assets/fundoLogin.png";


export const Container = styled.div`
background-image: url(${fundoLogin});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
width: 100vw;
`;

export const Box = styled.div`
background-color: ${({ theme }) => theme.colors.textPrimary};
border: 23px solid ${({ theme }) => theme.colors.linha};
border-radius: ${({ theme }) => theme.borderRadius.login};
height: 18.375rem;
width: 37.875rem;
padding: 1rem;
display: flex;
align-items: center;
justify-content: space-evenly;

img{
    height: 90%;
}
`

export const Formulario = styled.form`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
gap: 1rem;

select, input{
    background-color: ${({ theme }) => theme.colors.backgroundInput};
    color: ${({ theme }) => theme.colors.textInput};
    font-size: ${({ theme }) => theme.fontSize.button.desktop};
    width: 15rem;
    height: 2.3rem;
    padding-left: 1rem;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.card};

    &::placeholder {
    color: ${({ theme }) => theme.colors.textInput};
    opacity: 1; 
    }
}

`
