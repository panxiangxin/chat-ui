import "./App.css";
import useColorSwitch from "./useColorSwitch";

function App() {
  const [color, handleButton1Click] = useColorSwitch();

  const [color2, handleButton2Click] = useColorSwitch("#0000ff", "#ff00ff");

  return <div></div>;
}

export default App;
