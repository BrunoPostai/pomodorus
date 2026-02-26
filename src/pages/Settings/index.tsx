import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import MainTemplate from "../../templates/MainTemplate";

export function Settings() {
  return (
    <>
      <MainTemplate>
        <Container>
          <Header>Config</Header>
        </Container>
        <Container>
          <p style={{textAlign: 'center'}}>Control the times for focus, short and long breaks.</p>
        </Container>
      </MainTemplate>
    </>
  );
}

export default Settings;
