import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import Card from "./components/Card";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/GlobalsStyles";
import content from "./content";
import { ReactComponent as Collab } from "./images/collab.svg";
import Footer from "./components/Footer";

const theme = {
  colors:{
    header:'#ebfbff',
    body:'#fff',
    footer:'#072207',
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
          {content.map((item,index)=>(
             <Card key={index} item={item} ></Card>
          ))}
          </Container>
          <Footer/>

      </>
    </ThemeProvider>
  );
}

export default App;
