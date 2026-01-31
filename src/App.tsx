import "./styles/theme.css";
import "./styles/global.css";
import { Header } from "./components/Header";
import { TimerIcon } from "lucide-react";
function App() {
  return (
    <>
      <Header>
        Ola mundo
        <button>
          <TimerIcon />
        </button>
      </Header>
    </>
  );
}

export default App;
