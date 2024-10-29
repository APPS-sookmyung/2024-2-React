## 간단 예제로 배워보는 React

## 5강. State

## State(상태)란?

- 컴포넌트 내부의 변화하는 값
- 특정 상황이나 시점에 따라 달라질 수 있는 값은 state를 만들어 처리해줘야 함
- Ex. Counter 수
- Ex. Input 태그의 value 값

---

## useState란?

- 컴포넌트에서 State(상태)를 다룰 때 사용하는 함수
- useState 함수의 인자에는 state의 초기값으로 세팅해줄 값을 넣어줌
- useState 함수는 배열을 반환
  - 0번째 인덱스에는 state 값
  - 1번째 인덱스에는 state를 업데이트할 때 사용하는 함수(setter)

```jsx
const [count, setCount] = useState(0);
```

- state 값은 반드시 setter 함수로만 변경할 수 있음
- setter 함수는 state 이름 앞에 "set"을 붙여서 작성하는 것이 일반적

---

## 6강. 렌더링

## 변화하는 값을 화면에 보여줘야할 때

- State가 아닌 일반 변수는 렌더링을 일으킬(trigger) 수 없음
- 렌더링(Rendering): 가장 최선 버전의 컴포넌트 상황을 가져오기 위해 컴포넌트를 실행하는 것
  - 컴포넌트는 함수, 즉 렌더링 발생 == 컴포넌트 실행 == 함수 호출
  - 함수 호출? 컴포넌트 내부에 있는 코드들이 전부 재실행됨. UI를 반환하는 return문도 마찬가지!

**렌더링이 일어나야 변경사항이 반영된 가장 최신 버전의 화면이 DOM에 적용되어 우리가 바뀐 화면을 볼 수 있는 것이다.**

---

## Component가 화면에 그려지는 과정

1. 렌더링 발생시키기(Trigger a render)

- 렌더링은 2가지 경우에 발생
- 최초 앱 실행 시(혹은 새로고침 발생): initial rendering

```jsx
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElemnt);
root.render(<App />);
```

- state 값이 변경되었을 때 (by setter 함수): re-rendering

```jsx
const updateCount = (arg) => {
  setCount(count + arg);
};
```

2. 컴포넌트 렌더링 수행하기(React renders your components)

- 렌더링(Rendering): 가장 최신 버전의 컴포넌트 상황을 가져오기 위해 컴포넌트를 실행하는 것
  - 최초 앱 실행 시(혹은 새로고침 발생): 루트 컴포넌트 실행(& 그의 모든 자식 컴포넌트)
  - state 값이 변경되었을 때: state 값을 가진 컴포넌트 (& 그의 모든 자식 컴포넌트)

3. DOM에 변경사항 반영하기(React commits changes to the Dom)

- 리액트는 가장 최소한의 변경사항만 DOM에 반영하기를 원함
- 따라서 변경된 부분만 DOM에 반영됨

4. 브라우저가 화면 다시 그리기(Painting)

---

## 정리

- 변경사항이 화면에 반영되려면 렌더링이 발생해야 한다.
- 렌더링을 발생시킬 수 있는 것은 State의 setter 함수이다. (일반 변수는 렌더링을 발생시킬 수 없다.)
- 따라서 값의 변화를 화면에 보여주려면 반드시 State를 사용해야 한다.

---

## 8장. State 배열과 객체

## 배열 및 객체 State를 변경할 때는?

- 다른 타입의 state와 마찬가지로 setter 함수를 사용하여 state를 업데이트 해줘야 함
- 새로운 배열 혹은 객체를 만들어서 setter 함수에 전달해줘야 함

```jsx
setPersonList([
  ...personList,
  {
    id: nextId++,
    name: newName,
  },
]);

setPerson({
  ...person,
  firstName: e.target.value,
});
```

---

## 9강. State Batch Update

## State Batch 처리(일괄처리)

- 이벤트 핸들러 함수 내 state 변경 요청을 모아 일괄적으로 한 번에 state를 업데이트! : State Batch 처리 (일괄 처리)
- state 업데이트 처리는 이벤트 핸들러 함수의 모든 코드들이 실행되고 난 후, 가장 마지막에 수행됨
