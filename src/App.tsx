import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyle } from "./styles/global"
import { Router } from "./routes";

function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle>
          <Router />
        </GlobalStyle>
      </ThemeProvider>
    </>
  )
}

export default App
