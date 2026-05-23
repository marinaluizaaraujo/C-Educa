import styled from "styled-components"
import type { InputProps } from "./props"

export const StyledInput = styled.input<InputProps>`
  width: ${({ size }) => {
    if (size === "small") return "180px"
    if (size === "large") return "400px"
    return "280px"
  }};

  height: 40px;
  background-color: #D9D9D9;
  color: #333333;
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 0 12px;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
   
  border: 2px solid #6c6c6d;
}
`;