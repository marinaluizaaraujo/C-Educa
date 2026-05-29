import styled from "styled-components";

export const Container = styled.div`
  width: 850px;

  margin: auto;
  margin-left: 30%;

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

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textPrimary};

  font-size: 32px;
  font-family: ${({ theme }) => theme.fontFamily.primary};

  font-weight: 500;
`;

export const BtnBaixar = styled.button`
  background-color: #ff9800;

  border: none;
  border-radius: 50px;

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

export const FormContainer = styled.form`
  padding: 18px;

  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Row = styled.div`
  display: flex;
  gap: 14px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  flex: 1;

  height: 48px;

  border: none;
  border-radius: 10px;

  padding: 0 16px;

  background-color: #f8f8f8;

  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily.primary};

  outline: none;

  &::placeholder {
    color: #8b8b8b;
  }
`;

export const Select = styled.select`
  flex: 1;

  height: 48px;

  border: none;
  border-radius: 10px;

  padding: 0 16px;

  background-color: #f8f8f8;

  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily.primary};

  outline: none;

  color: #8b8b8b;
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

  background-color: #f8f8f8;

  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily.primary};

  outline: none;

  &::placeholder {
    color: #8b8b8b;
  }
`;

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 15px;

  font-family: ${({ theme }) => theme.fontFamily.primary};

  color: #777;
`;