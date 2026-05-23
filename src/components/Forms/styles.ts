
import styled from "styled-components"

export const Container = styled.div`
  width: 850px;

  margin: 30px;

  background-color: ${({ theme }) => theme.colors.background};

  border-radius: 16px;

  overflow: hidden;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
`;

export const Header = styled.div`
  width: 100%;
  height: 70px;

  background-color: ${({ theme }) => theme.colors.backgroundNav};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Subtitle = styled.h2`
    font-size: 16px;
    font-family: ${({ theme }) => theme.fontFamily.primary};
    padding: 20px;
`;

export const Espaco = styled.h3`

  font-size: 20px;
  
`;

export const InputDate = styled.input`
    width: 400px;
  height: 40px;
  background-color: #D9D9D9;
  color: #333333;
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 0 12px;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 16px;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
  border: 2px solid #6c6c6d;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 14px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormContainer = styled.form`
    padding: 18px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    
`;


export const Select = styled.select`
    width: 400px;
    height: 40px;
    background-color: #D9D9D9;
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: 16px;
    font-family: ${({ theme }) => theme.fontFamily.primary};
    padding: 0 12px;
        &:hover {
    border-color: #717171;
    background: #CBCBCB;
  }
    &:focus {
    outline: none;
    border: 2px solid #6c6c6d;
  }
`;

export const Linha = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors.linha};

  opacity: 0.15;

  margin: 6px 0;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 110px;

  border: none;
  border-radius: 10px;

  padding: 16px;

  resize: none;

  background-color: #D9D9D9;

  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily.primary};

  outline: none;

  &::placeholder {
    color: #8b8b8b;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Btn= styled.button`
background-color: #ff9800;

  border: none;
  border-radius: 5px;
  margin-left: 10px;
  padding: 10px 16px;

  color: white;

  font-size: 18px;
  font-family: ${({ theme }) => theme.fontFamily.primary};

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;