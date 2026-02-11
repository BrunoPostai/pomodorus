import { PlayCircleIcon } from "lucide-react";
import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";
import { Cycles } from "../Cycles";
import { useState } from "react";

export function MainForm() {
  const [taskName, setTaskName] = useState("");

  function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Deu certo!", taskName);
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DefaultInput
          id="meuInput"
          type="text"
          placeholder="digite algo"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>

      <div className="formRow">
        <p>the next interval is: </p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} color="red" />
      </div>
    </form>
  );
}
