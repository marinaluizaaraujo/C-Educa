import Logo from "../../assets/logo.png"
import { Outlet } from "react-router-dom";
import { Box, Container, IconAjuda, IconTurmas, LinkAjuda, Navgation, NavList, PaginaLink, Stack } from "./styles";
import { Text } from "../Text/styles";

export function Nav() {
    return (
        <Container>
            <Box>
                <img src={Logo} alt="" />
                <Text size="title" type="Primary" color="textSecundary">Menu</Text>
            </Box>
            <Navgation>
                <NavList>
                    <PaginaLink to="/turmas">
                        <li>
                            <IconTurmas />
                            <Text type="Primary">Turmas</Text>
                        </li>
                    </PaginaLink>
                    <PaginaLink to="/turmas">
                        <li>
                            <IconTurmas />
                            <Text type="Primary">Turmas</Text>
                        </li>
                    </PaginaLink>
                    <PaginaLink to="/turmas">
                        <li>
                            <IconTurmas />
                            <Text type="Primary">Turmas</Text>
                        </li>
                    </PaginaLink>
                    <PaginaLink to="/turmas">
                        <li>
                            <IconTurmas />
                            <Text type="Primary">Turmas</Text>
                        </li>
                    </PaginaLink>
                </NavList>
            </Navgation>
            <Stack>
                <LinkAjuda to="/ajuda">
                    <span>
                        <IconAjuda />
                        <Text type="Primary" >Ajuda</Text>
                    </span>
                </LinkAjuda>
            </Stack>
            <Outlet />
        </Container>
    )
}