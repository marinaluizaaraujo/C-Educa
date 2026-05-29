import styled from "styled-components"

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
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