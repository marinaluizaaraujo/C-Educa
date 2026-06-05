import { ChalkboardTeacherIcon } from "@phosphor-icons/react";
import { Briefcase, UsersThree } from "phosphor-react";
import styled, { css } from "styled-components";
import { media } from "../../../../styles/mediaQueries";

export const Container = styled.div`
background-color: ${({ theme }) => theme.colors.backgroundNav};
width: 20.4rem;
border-radius: ${({ theme }) => theme.borderRadius.card};
padding: 2rem;
`

export const Box = styled.div`
margin-top: 1.5rem;
display: flex;
justify-content: space-between;
align-items: center;
`

export const IconeAlunos = styled(UsersThree)`
color: ${({ theme }) => theme.colors.textPrimary};

${media.tablet(css`
width: 25px;
height: 25px;
`)}

${media.desktop(css`
width: 80px;
height: 80px;
`)}
`

export const IconTurmas = styled(ChalkboardTeacherIcon)`
color: ${({ theme }) => theme.colors.textPrimary};

${media.tablet(css`
width: 25px;
height: 25px;
`)}

${media.desktop(css`
width: 80px;
height: 80px;
`)}

`

export const IconeJovemAprendiz = styled(Briefcase)`
color: ${({ theme }) => theme.colors.textPrimary};

${media.tablet(css`
width: 25px;
height: 25px;
`)}

${media.desktop(css`
width: 80px;
height: 80px;
`)}
`