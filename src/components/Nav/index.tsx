import Logo from "../../assets/logo.png"
import { Box, Container, IconAjuda, LinkAjuda, Navgation, NavList, PaginaLink, Stack } from "./styles";
import { Text } from "../Text/style";
import type { UserRole } from "./types";
import { menus } from "./menus";

type Props = {
    role: UserRole;
};

export function Nav({ role }: Props) {
    return (
        <Container>
            <Box>
                <img src={Logo} alt="" />
                <Text size="title" type="Primary" color="textSecundary">Menu</Text>
            </Box>
            <Navgation>
                <NavList>
                    {menus[role].map((menu) => {
                        const Icon = menu.icon;
                        return (
                            <PaginaLink
                                key={menu.name}
                                to={menu.path}
                                end={menu.path === `/${role}`}
                            >
                                <li>
                                    <Icon />
                                    <Text type="Primary">{menu.name}</Text>
                                </li>
                            </PaginaLink>
                        )
                    })}
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
        </Container>
    )
}