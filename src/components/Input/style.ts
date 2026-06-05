import styled from "styled-components"
import type { InputProps } from "./props"

export const StyledInput = styled.input<InputProps>`
  width: ${({ size }) => {
    if (size === "small") return "200px"
    if (size === "large") return "400px"
    return "280px"
  }};

  height: 40px;
  background-color: ${({ theme }) => theme.colors.backgroundInput};
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

&[type="checkbox"] {
    width: 18px;
    height: 18px;
    accent-color: #F9862F;
    cursor: pointer;
    padding: 0;
    margin: 5px;
  }
`;