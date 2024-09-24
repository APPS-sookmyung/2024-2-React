## 간단 예제로 배워보는 React

---

## 3강. JSX

### JSX란?

- JSX(Javascript XML)
- JS에 XML을 추가한 JS 확장 문법
- JS 내에서 HTML 문법을 사용하는 것
- JSX는 JS가 아니므로, 브라우저가 이해할 수 없음
- 따라서, 리액트는 Babel이라는 컴파일러를 사용하여 JSX -> JS로 변환함

---

```jsx
//JSX
const Button = React.createElement(
  "button",
  { className: "child-btn" },
  "버튼"
); //html 태그, 속성, children
const Wrapper = React.createElement("div", { className: "wrapper" }, Button);

return Wrapper;
```

```js
//JS
return (
  <div className="wrapper">
    <button className="child-btn">버튼</button>
  </div>
);
```

---

### JSX 규칙

1. class 대신 className

```jsx
<div className="wrapper">
  <button className="child-btn">버튼</button>
</div>
```

2. 무조건 하나의 부모 요소로 감싸주어야 함

- div로 묶어주기 싫을 때는 빈 태그로 감싸주기
- 빈 태그는 Fragment라고 부르며, 실제로 화면에 렌더링되지 않음

```jsx
<>
  <button>버튼1</button>
  <button>버튼2</button>
</>
```

3. JSX 내에서 JS 표현식을 사용하고 싶을 때는 중괄호 사용하기

```jsx
const name = "Charles";
const fruits = ['apple', 'orange', 'banana'];

return (
   <div>
      <button>{name}</button>
      <ul>
         {fruits.map((f) => <li>{f}</li>)}
      </ul>
   <div>
);
```

---

## 4강. Props

- Properties(속성)의 약자
- 리액트에서 데이터의 전달 방향은 부모 컴포넌트 -> 자식 컴포넌트
- 부모 컴포넌트는 자식 컴포넌트에게 Props로 데이터를 전달
