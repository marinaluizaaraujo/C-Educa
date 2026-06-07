import { createContext, useContext } from "react"
import type { ReactNode } from "react"

interface AuthContextType {
    raAtivo: string
}

const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: { children: ReactNode }) {
    return (
        <AuthContext.Provider value={{ raAtivo: "2026000000002" }}>
            {children}
        </AuthContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
    return useContext(AuthContext)
}