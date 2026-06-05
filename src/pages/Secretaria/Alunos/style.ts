import styled from "styled-components";

export const Container = styled.div`
  overflow-x: hidden;
`

export const ButtonContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
  margin-top: 4rem;
  margin-left: 22%;
  
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