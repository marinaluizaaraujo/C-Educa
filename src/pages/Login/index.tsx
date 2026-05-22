import { useState } from "react";

import { useNavigate } from "react-router-dom";

import type { UserRole } from "../../components/Nav/types";

export function Login() {
    const [role, setRole] =
        useState<UserRole>("aluno");

    const navigate = useNavigate();

    function handleLogin() {
        navigate(`/${role}`);
    }

    return (
        <div>
            <h1>Login Fake</h1>

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

            <button onClick={handleLogin}>
                Entrar
            </button>
        </div>
    );
}
