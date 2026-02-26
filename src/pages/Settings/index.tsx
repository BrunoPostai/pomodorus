import { SaveIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import { DefaultInput } from "../../components/DefaultInput";
import { Header } from "../../components/Header";
import MainTemplate from "../../templates/MainTemplate";
import { useEffect, useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/UseTaskContext";
import { showMessage } from "../../adapters/toastifyWrapper";
import { TaskActionsTypes } from "../../contexts/TaskContext/taskActions";

export function Settings() {
  const { state, dispatch } = useTaskContext();
  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.title = "Settings - Pomodorus";
  }, []);

  function handleSaveSettings(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    showMessage.dismiss();

    const formErrors = [];

    const workTime = Number(workTimeInput.current?.value);
    const shortBreakTime = Number(shortBreakTimeInput.current?.value);
    const longBreakTime = Number(longBreakTimeInput.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push("Please only use numbers");
    }

    if (workTime < 1 || workTime > 99) {
      formErrors.push("Focus time must be between 1 and 99 minutes.");
    }
    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formErrors.push("Short break time must be between 1 and 30 minutes.");
    }
    if (longBreakTime < 1 || longBreakTime > 60) {
      formErrors.push("Long break time must be between 1 and 60 minutes.");
    }

    if (formErrors.length > 0) {
      formErrors.forEach((error) => {
        showMessage.error(error);
      });
      return;
    }
    dispatch({
      type: TaskActionsTypes.CHANGE_SETTINGS,
      payload: { workTime, shortBreakTime, longBreakTime },
    });
    showMessage.success("Settings successfully saved");
  }

  return (
    <>
      <MainTemplate>
        <Container>
          <Header>Settings</Header>
        </Container>
        <Container>
          <p style={{ textAlign: "center" }}>
            Control the times for focus, short and long breaks.
          </p>
        </Container>
        <Container>
          <form onSubmit={handleSaveSettings} action="" className="form">
            <div className="formRow">
              <DefaultInput
                id="workTime"
                labelText="Focus"
                ref={workTimeInput}
                defaultValue={state.config.workTime}
                type="number"
              />
            </div>
            <div className="formRow">
              <DefaultInput
                id="shortBreakTime"
                labelText="Short Break"
                ref={shortBreakTimeInput}
                defaultValue={state.config.shortBreakTime}
                type="number"
              />
            </div>
            <div className="formRow">
              <DefaultInput
                id="longBreakTime"
                labelText="Long Break"
                ref={longBreakTimeInput}
                defaultValue={state.config.longBreakTime}
                type="number"
              />
            </div>
            <div className="formRow">
              <DefaultButton
                icon={<SaveIcon />}
                aria-label="Save settings"
                title="Save settings"
              />
            </div>
          </form>
        </Container>
      </MainTemplate>
    </>
  );
}

export default Settings;
