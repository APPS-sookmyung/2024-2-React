import React, { useState } from "react";

export default function App() {
  console.log("App 컴포넌트 렌더링 발생");

  return (
    <div>
      부모 컴포넌트
      <Child />
    </div>
  );
}

const Child = () => {
  const [count, setCount] = useState(0);

  console.log("Child 컴포넌트 렌더링 발생");

  return (
    <div>
      자식 컴포넌트
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>state 변경</button>
      <GrandChild />
    </div>
  );
};

const GrandChild = () => {
  console.log("GrandChild 컴포넌트 렌더링 발생");

  return <div>손주 컴포넌트</div>;
};

