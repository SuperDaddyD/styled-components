import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import Card from "./components/Card";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/GlobalsStyles";
import content from "./content";
import { ReactComponent as Collab } from "./images/collab.svg"

const theme = {
  colors:{
    header:'#ebfbff',
    body:'#fff',
    footer:'#00333',
    check:'pink'
  },
  mobile:'768'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles/>
        <Header />
        <Container>
          <h1>Hi Guys</h1>
          {content.map((item,index)=>(
             <Card key={index} item={item} ></Card>
          ))}
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
