import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyle } from "./styles/global"
import { Router } from "./routes";
import { AlunosProvider } from "./contexts/AlunosContext";

function App() {

  // localStorage.removeItem("educandario:alunos")

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <AlunosProvider>
          <GlobalStyle />
          <Router />
        </AlunosProvider>
      </ThemeProvider>
    </>
  )
}

export default App
