import styled, { css } from "styled-components";
import type { TextProps } from "./props";
import { media } from "../../styles/mediaQueries";

export const Text = styled.span<TextProps>`
color: ${(props) => props.color === "textSecundary" ? props.theme.colors.textSecondary :
        props.color === "textTertiary" ? props.theme.colors.textTertiary :
            props.theme.colors.textPrimary};
            
font-family: ${(props) => props.theme.fontFamily.primary};

font-size: ${(props) => props.size === "title"
        ? props.theme.fontSize.title.mobile :
        props.size === "button" ? props.theme.fontSize.button.mobile :
            props.theme.fontSize.paragraph.mobile};

${media.tablet(css<TextProps>`
    font-size: ${(props) => props.size === "title" ? props.theme.fontSize.title.tablet :
                    props.size === "button" ? props.theme.fontSize.button.tablet :
                        props.theme.fontSize.paragraph.tablet}; 
        `)}

${media.desktop(css<TextProps>`
    font-size: ${(props) => props.size === "title" ? props.theme.fontSize.title.desktop :
                                props.size === "button" ? props.theme.fontSize.button.desktop :
                                    props.theme.fontSize.paragraph.desktop};
        `)}
`