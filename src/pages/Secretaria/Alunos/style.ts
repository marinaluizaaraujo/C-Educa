import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  box-sizing: border-box;
  margin-left: 400px;
`;

export const Btn = styled.button`
  background-color: #ff9800;
  border: none;
  border-radius: 5px;
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