import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Logo } from "./components/Logo";

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Header>MENU</Header>
      </Container>
    </>
  );
}

export default App;
