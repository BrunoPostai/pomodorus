import { PlayCircleIcon } from "lucide-react";
import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";
import { Cycles } from "../Cycles";

export function MainForm(){
  
  return (
    <form className="form" action="">
      <div className="formRow">
        <DefaultInput id="meuInput" type="text" placeholder="digite algo" />
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
