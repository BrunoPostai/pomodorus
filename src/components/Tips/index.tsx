import { useTaskContext } from "../../contexts/TaskContext/UseTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const tipsForWhenActiveTask = {
    workTime: <span>Focus for {state.config.workTime} minutes</span>,
    shortBreakTime: (
      <span>Break of {state.config.shortBreakTime} minutes</span>
    ),
    longBreakTime: (
      <span>Long Break</span>
    ),
  };

  const tipsForNoActiveTask = {
    workTime: <span>Next cycle is {state.config.workTime}min</span>,
    shortBreakTime: <span>Next Break is {state.config.shortBreakTime}min</span>,
    longBreakTime: <span>Next Break is a long break</span>,
  };

  return (
    <>
      {state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
