import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";
import { Cycles } from "../Cycles";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/UseTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionsTypes } from "../../contexts/TaskContext/taskActions";
import { Tips } from "../Tips";
import { showMessage } from "../../adapters/toastifyWrapper";

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);
  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || '';

  // cycles
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    showMessage.dismiss();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      showMessage.warn("Write the task name!");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionsTypes.START_TASK, payload: newTask });

    showMessage.success("Task initiated");
  }

  function handleInterruptTask() {
    dispatch({ type: TaskActionsTypes.INTERRUPT_TASK });
    showMessage.dismiss();
    showMessage.error('Task was interrupted!');
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DefaultInput
          id="meuInput"
          type="text"
          placeholder="digite algo"
          ref={taskNameInput}
          disabled={!!state.activeTask}
          defaultValue={lastTaskName}
        />
      </div>

      <div className="formRow">
        <Tips />
      </div>

      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}

      <div className="formRow">
        {!state.activeTask ? (
          <DefaultButton
            type="submit"
            icon={<PlayCircleIcon />}
            color="green"
            aria-label="Start new chore"
            title="Start new chore"
            key="submit_btn"
          />
        ) : (
          <DefaultButton
            type="button"
            icon={<StopCircleIcon />}
            color="red"
            aria-label="Interrupt chore"
            title="Interrupt chore"
            onClick={handleInterruptTask}
            key="button_btn"
          />
        )}
      </div>
    </form>
  );
}
