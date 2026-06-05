import { useState } from "react";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

import type { UserRole } from "../../components/Nav/types";
import { Box, Container, Formulario } from "./styles";
import { Text } from "../../components/Text/style";
import { Button } from "../../components/Button/style";

export function Login() {
    const [role, setRole] =
        useState<UserRole>("aluno");

    const navigate = useNavigate();

    function handleLogin() {
        navigate(`/${role}`);
    }

    return (
        <Container>
            <Box>
                <img src={Logo} alt="" />

                <Formulario>
                    <Text type="Primary" color="textTertiary" size="title">
                        C´Educa
                    </Text>
                    <select
                        value={role}
                        onChange={(e) =>
                            setRole(
                                e.target.value as UserRole
                            )
                        }
                    >
                        <option value="aluno">
                            Aluno
                        </option>

                        <option value="professor">
                            Professor
                        </option>

                        <option value="secretaria">
                            Secretaria
                        </option>
                    </select>

                    {/* <input
                        type="password"
                        placeholder="Senha"
                    /> */}

                    <Button
                        size="small"
                        onClick={handleLogin}
                    >
                        <Text type="Primary" color="textPrimary" size="button">
                            Entrar
                        </Text>
                    </Button>
                </Formulario>
            </Box>
        </Container>
    );
}
