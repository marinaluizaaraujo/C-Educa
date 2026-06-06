import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
background-color: ${({ theme }) => theme.colors.backgroundNav};
margin-top: 2rem;
padding: 2rem;
width: 65rem;
border-radius: ${({ theme }) => theme.borderRadius.card};
`

export const Box = styled.div`
margin-top: 1.5rem;
display: flex;
gap: 1rem;
`

export const Links = styled(NavLink)`
text-decoration: none;
`