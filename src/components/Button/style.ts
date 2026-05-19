import styled from "styled-components";
import type { ButtonProps } from "./props";

export const Button = styled.button<ButtonProps>`
background-color: ${(props) => props.theme.colors.backgroundButton};
width: ${(props) => props.size === "small" ? props.theme.widthButton.small :
        props.size === "medium" ? props.theme.widthButton.medium :
            props.theme.widthButton.large};
height: ${(props) => props.size === "small" ? props.theme.heightButton.small :
        props.size === "medium" ? props.theme.heightButton.medium :
            props.theme.heightButton.large};
border-radius: ${(props) => props.theme.borderRadius.button};
border: none;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
`