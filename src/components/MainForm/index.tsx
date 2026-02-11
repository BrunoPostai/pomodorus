import { PlayCircleIcon } from "lucide-react";
import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";
import { Cycles } from "../Cycles";
import { useRef } from "react";

export function MainForm() {
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Deu certo!", taskNameInput.current?.value);
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DefaultInput
          id="meuInput"
          type="text"
          placeholder="digite algo"
          ref={taskNameInput}
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
