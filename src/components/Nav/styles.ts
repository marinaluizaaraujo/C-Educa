import { BuildingOfficeIcon, ChalkboardTeacherIcon, QuestionIcon } from "@phosphor-icons/react";
import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { media } from "../../styles/mediaQueries";
import { Article, Briefcase, House, Person, UsersThree } from "phosphor-react";

export const Container = styled.aside`
background-color: ${({ theme }) => theme.colors.backgroundNav};

${media.tablet(css`
min-height: 100vh;
width: 20vw;
border-radius: 0 10px 10px 0;
flex-direction: column;
justify-content: space-between;
`)}

${media.desktop(css`
min-height: 100vh;
width: 20vw;
display: flex;
flex-direction: column;
justify-content: space-between;
`)}

`

export const Box = styled.div`
background-color: ${({ theme }) => theme.colors.background};

${media.tablet(css`
padding-bottom: 1rem;
padding-top: 1rem;
padding-left: 1rem;
margin-right: 0.5rem;
border-radius: 0 10px 0 0;
display: flex;
flex-direction: row;
gap: 0.5rem;

img{
    width: 30%;
}

span{ 
margin-top: 1.5rem;
}

`)}

${media.desktop(css`
padding-bottom: 2rem;
padding-top: 1rem;
padding-left: 1.5rem;
margin-right: 0.5rem;
border-radius: 0 10px 0 0;
display: flex;
flex-direction: row;
gap: 0.5rem;

img{
    width: 30%;
}

span{ 
margin-top: 1rem;
}
`)}

`

export const Navgation = styled.nav`
${media.tablet(css`
margin-top: 3rem;
height: 70vh;
display: flex;
flex-direction: column;
`)}

${media.desktop(css`
margin-top: 3rem;
min-height: 65vh;
display: flex;
flex-direction: column;
`)}

`

export const PaginaLink = styled(NavLink)`
text-decoration: none;
list-style: none;
transition: 0.8s;

${media.tablet(css`
border-top: 2px solid ${({ theme }) => theme.colors.linha};
display: flex;
padding-left:1.3rem ;
gap: 0.8rem;
align-items: center;
`)}

${media.desktop(css`
border-top: 2px solid ${({ theme }) => theme.colors.linha};
display: flex;
padding-left:0.8rem ;
gap: 0.8rem;
align-items: center;

`)}

&:hover{
    background-color: ${({ theme }) => theme.colors.linha};
}

&.active{
    background-color: ${({ theme }) => theme.colors.linha};
    border-right: 5px solid ${({ theme }) => theme.colors.backgroundButton};

    span{
        color: ${({ theme }) => theme.colors.backgroundButton};
    }

    svg{
        color: ${({ theme }) => theme.colors.backgroundButton};
    }
}
`

export const NavList = styled.ul`
${media.tablet(css`
    li{
        padding-bottom:1rem ;
        padding-top:1rem ;
        display: flex;
        align-items: center;
        gap: 0.8rem;
    }
`)}

${media.desktop(css`
    li{
        padding-bottom:1rem ;
        padding-top:1rem ;
        display: flex;
        align-items: center;
        gap: 0.8rem;
    }
`)}

`

export const LinkAjuda = styled(Link)`
text-decoration: none;
`

export const Stack = styled.div`
${media.tablet(css`
padding-top: 1rem;
padding-left:0.8rem ;
display: flex;
flex-direction: row;
width: 50%;
background-color: blueviolet;

span{
    display: flex;
    align-items: center;
    gap: 0.8rem;
}
`)}

${media.desktop(css`
padding-top: 2rem;
padding-bottom:1.5rem ;
padding-left:1.3rem ;
width: 100%;

span{
    display: flex;
    align-items: center;
    gap: 0.8rem;
}
`)}
`

export const IconTurmas = styled(ChalkboardTeacherIcon)`
color: ${({ theme }) => theme.colors.textPrimary};

${media.tablet(css`
width: 25px;
height: 25px;
`)}

${media.desktop(css`
width: 45px;
height: 45px;
`)}

`

export const IconAjuda = styled(QuestionIcon)`
color: ${({ theme }) => theme.colors.textPrimary};

${media.tablet(css`
width: 25px;
height: 25px;
`)}

${media.desktop(css`
width: 45px;
height: 45px;
`)}
`
export const IconPerfil = styled(Person)`
color: ${({ theme }) => theme.colors.textPrimary};

${media.tablet(css`
width: 25px;
height: 25px;
`)}

${media.desktop(css`
width: 45px;
height: 45px;
`)}
`

export const IconHome = styled(House)`
color: ${({ theme }) => theme.colors.textPrimary};

${media.tablet(css`
width: 25px;
height: 25px;
`)}

${media.desktop(css`
width: 45px;
height: 45px;
`)}
`

export const IconCurriculo = styled(Article)`
color: ${({ theme }) => theme.colors.textPrimary};

${media.tablet(css`
width: 25px;
height: 25px;
`)}

${media.desktop(css`
width: 45px;
height: 45px;
`)}
`

export const IconGroup = styled(UsersThree)`
color: ${({ theme }) => theme.colors.textPrimary};

${media.tablet(css`
width: 25px;
height: 25px;
`)}

${media.desktop(css`
width: 45px;
height: 45px;
`)}
`

export const IconEmpresas = styled(BuildingOfficeIcon)`
color: ${({ theme }) => theme.colors.textPrimary};

${media.tablet(css`
width: 25px;
height: 25px;
`)}

${media.desktop(css`
width: 45px;
height: 45px;
`)}
`

export const IconVagas = styled(Briefcase)`
color: ${({ theme }) => theme.colors.textPrimary};

${media.tablet(css`
width: 25px;
height: 25px;
`)}

${media.desktop(css`
width: 45px;
height: 45px;
`)}
`