import { TrashIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import { Header } from "../../components/Header";
import MainTemplate from "../../templates/MainTemplate";
import styles from "./styles.module.css";
import { useTaskContext } from "../../contexts/TaskContext/UseTaskContext";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { useEffect, useState } from "react";
import { sortTasks, type SortTasksOptions } from "../../utils/sortTasks";
import { showMessage } from "../../adapters/toastifyWrapper";
import { TaskActionsTypes } from "../../contexts/TaskContext/taskActions";

export function History() {
  const { state, dispatch } = useTaskContext();
  const [confirmClearHistory, setConfirmClearHistory] = useState(false);
  const hasTasks = state.tasks.length > 0;

  const [sortTasksOptions, setSortTasksOptions] = useState<SortTasksOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: state.tasks }),
        field: "startDate",
        direction: "desc",
      };
    },
  );

  useEffect(() => {
    setSortTasksOptions((prevState) => ({
      ...prevState,
      tasks: sortTasks({
        tasks: state.tasks,
        direction: prevState.direction,
        field: prevState.field,
      }),
    }));
  }, [state.tasks]);

  useEffect(() => {
    if (!confirmClearHistory) return;
    setConfirmClearHistory(false);

    dispatch({ type: TaskActionsTypes.RESET_STATE });
  }, [confirmClearHistory]);

  useEffect(() => {
    return () => {
      showMessage.dismiss();
    };
  }, []);

  function handleSortTasks({ field }: Pick<SortTasksOptions, "field">) {
    const newDirection = sortTasksOptions.direction === "desc" ? "asc" : "desc";
    setSortTasksOptions({
      tasks: sortTasks({
        direction: newDirection,
        tasks: sortTasksOptions.tasks,
        field,
      }),
      direction: newDirection,
      field,
    });
  }

  function handleResetHistory() {
    showMessage.dismiss();
    showMessage.confirm("Are you sure?", (confirmation) => {
      setConfirmClearHistory(confirmation);
    });
  }

  return (
    <>
      <MainTemplate>
        <Container>
          <Header>
            <span>History</span>
            {hasTasks && (
              <span className={styles.buttonContainer}>
                <DefaultButton
                  icon={<TrashIcon />}
                  color="red"
                  aria-label="Delete history"
                  title="Delete history"
                  onClick={handleResetHistory}
                />
              </span>
            )}
          </Header>
        </Container>
        <Container>
          {hasTasks && (
            <div className={styles.responsiveTable}>
              <table>
                <thead>
                  <tr>
                    <th
                      onClick={() => handleSortTasks({ field: "name" })}
                      className={styles.thSort}
                    >
                      Task ↕
                    </th>
                    <th
                      onClick={() => handleSortTasks({ field: "duration" })}
                      className={styles.thSort}
                    >
                      Duration ↕
                    </th>
                    <th
                      onClick={() => handleSortTasks({ field: "startDate" })}
                      className={styles.thSort}
                    >
                      Date ↕
                    </th>
                    <th>Status</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  {sortTasksOptions.tasks.map((task) => {
                    const taskTypeDictionary = {
                      workTime: "Focus",
                      shortBreakTime: "Short Break",
                      longBreakTime: "Long Break",
                    };
                    return (
                      <tr key={task.id}>
                        <td>{task.name}</td>
                        <td>{task.duration}</td>
                        <td>{formatDate(task.startDate)}</td>
                        <td>{getTaskStatus(task, state.activeTask)}</td>
                        <td>{taskTypeDictionary[task.type]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
          {!hasTasks && (
            <p style={{ textAlign: "center" }}>There aren't tasks</p>
          )}
        </Container>
      </MainTemplate>
    </>
  );
}

export default History;
