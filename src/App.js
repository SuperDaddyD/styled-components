import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/GlobalsStyles";

const theme = {
  colors:{
    header:'#ebfbff',
    body:'#fff',
    footer:'#00333',
    check:'pink'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles/>
        <Header />
        <Container>
          <h1>Hi Guys</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
