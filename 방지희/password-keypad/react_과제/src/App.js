import { useState } from "react";
import "./styles.css";

const PASSWORD = "1234";
const keys = [7, 8, 9, 4, 5, 6, 1, 2, 3];

const KeyButton = ({ value, onClick }) => (
  <div className="key-wrapper bg-darkgray">
    <button className="key" onClick={() => onClick(value)}>
      {value}
    </button>
  </div>
);

export default function App() {
  // 어떤 상태(State)가 필요할까?
  // 기능 구현 전 keypad의 숫자 키를 컴포넌트화하면 좋아요! (hint: keys 배열과 map() 함수 사용)
  // slice() 함수를 이용해 첫 번째 기능을 구현하세요!
  const [display, setDisplay] = useState("****");
  const [status, setStatus] = useState("잠김");

  const handleButtonClick = (value) => {
    const newDisplay = (display.replace(/\*/g, "") + value).slice(-4);
    setDisplay(newDisplay.padStart(4, "*"));
  };

  const handleACClick = () => {
    setDisplay("****");
  };

  const handleEnterClick = () => {
    if (display === PASSWORD) {
      setStatus("풀림");
    } else if (status === "풀림") {
      setStatus("잠김");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="status">{status}</div>
        <div className="display">{display}</div>
        <div className="keypad">
          {keys.map((key) => (
            <KeyButton key={key} value={key} onClick={handleButtonClick} />
          ))}

          {/* <div className="key-wrapper bg-darkgray">
            <button className="key" onClick={() => handleButtonClick(7)}>
              7
            </button>
          </div>
          <div className="key-wrapper bg-darkgray">
            <button className="key" onClick={() => handleButtonClick(8)}>
              8
            </button>
          </div>
          <div className="key-wrapper bg-darkgray">
            <button className="key" onClick={() => handleButtonClick(9)}>
              9
            </button>
          </div>
          <div className="key-wrapper bg-darkgray">
            <button className="key" onClick={() => handleButtonClick(4)}>
              4
            </button>
          </div>
          <div className="key-wrapper bg-darkgray">
            <button className="key" onClick={() => handleButtonClick(5)}>
              5
            </button>
          </div>
          <div className="key-wrapper bg-darkgray">
            <button className="key" onClick={() => handleButtonClick(6)}>
              6
            </button>
          </div>
          <div className="key-wrapper bg-darkgray">
            <button className="key" onClick={() => handleButtonClick(1)}>
              1
            </button>
          </div>
          <div className="key-wrapper bg-darkgray">
            <button className="key" onClick={() => handleButtonClick(2)}>
              2
            </button>
          </div>
          <div className="key-wrapper bg-darkgray">
            <button className="key" onClick={() => handleButtonClick(3)}>
              3
            </button>
          </div> */}
          <div className="key-wrapper bg-red">
            <button className="key" onClick={handleACClick}>
              AC
            </button>
          </div>
          <div className="key-wrapper bg-green span2">
            <button className="key" onClick={handleEnterClick}>
              Enter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
