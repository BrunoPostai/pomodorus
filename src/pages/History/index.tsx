import { TrashIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import { Header } from "../../components/Header";
import MainTemplate from "../../templates/MainTemplate";
import styles from "./styles.module.css";

export function History() {
  return (
    <>
      <MainTemplate>
        <Container>
          <Header>
            <span>History</span>
            <span className={styles.buttonContainer}>
              <DefaultButton
                icon={<TrashIcon />}
                color="red"
                aria-label="Delete history"
                title="Delete history"
              />
            </span>
          </Header>
        </Container>
        <Container>
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Duration</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 20 }).map((_, index) => {
                  return (
                    <tr key={index}>
                      <td>Estudar</td>
                      <td>25min</td>
                      <td>20/04/2025 08:00</td>
                      <td>Completa</td>
                      <td>Foco</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Container>
      </MainTemplate>
    </>
  );
}

export default History;
