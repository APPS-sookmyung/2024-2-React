import { useState } from "react";
import "./styles.css";

const PASSWORD = "1234";
const keys = [7, 8, 9, 4, 5, 6, 1, 2, 3];

function KeyButton({ value, onClick }) {
  return (
    <div className="key-wrapper bg-darkgray" onClick={() => onClick(value)}>
      <button className="key">{value}</button>
    </div>
  );
}

export default function App() {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("잠김");

  const handleKeyPress = (value) => {
    if (input.length < 4) {
      setInput(input + value);
    } else {
      setInput(input.slice(1) + value);
    }
  };

  const handleReset = () => {
    setInput("");
  };

  const handleEnter = () => {
    if (input === PASSWORD) {
      setStatus("풀림");
    } else {
      setStatus("잠김");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="status">{status}</div>
        <div className="display">{input.padStart(4, "*")}</div>
        <div className="keypad">
          {keys.map((key) => (
            <KeyButton key={key} value={key} onClick={handleKeyPress} />
          ))}
          <div className="key-wrapper bg-red">
            <button className="key" onClick={handleReset}>
              AC
            </button>
          </div>
          <div className="key-wrapper bg-green span2">
            <button className="key" onClick={handleEnter}>
              Enter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
