## 5강

### State

- State란?

  - 컴포넌트 내부의 _변화하는 값_ (ex 상품의 수량)
  - 특정 상황이나 시점에 따라 달라질 수 있는 값은 state를 만들어 처리해줘야 함

- useState란?

```
import { useState } from "react";
...
const [count, setCount] = useState(0);
```

    * useState 함수의 인자에는 state의 초기값을 넣어줌
    * useState 함수는 배열을 반환
      * 0번 째 인덱스에는 state 값
      * 1번 째 인덱스에는 state를 업데이트할 대 사용하는 함수(setter)

    * 규칙
      * state 값은 setter 함수로만 변경 가능
      * 일반적으로 setter 함수는 state 이름 앞에 "set"을 붙여서 작성

## 6강

### 렌더링

- 왜 변화하는 값을 일반 변수가 아닌 state로 다룰까?
  - 일반 변수는 렌더링을 일으킬 수 없음
- 렌더링이란?
  - 가장 최신 버전의 컴포넌트 상황을 가져오기 위해 컴포넌트를 실행하는 것
  - 컴포넌트는 함수, 렌더링 발생 == 컴포넌트 실행 == 함수 호출
  - 컴포넌트 내부가 재실행

### Component가 화면에 그려지는 과정

1. 렌더링 발생시키기(발생하는 경우)


    - 최초 앱 실행<- initial rendering
    ```
    const rootElement = document.getElementById('root');
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
    ```
    - state 값이 변경되었을 때(by setter 함수) <- re-rentdering
    ```
    const updateCount = (arg) => {
      setCount(count + arg);
    };
    ```

2. 컴포넌트 렌더링 수행하기


    - 최초 앱 실행 시(혹은 새로고침): 루트 컴포넌트 실행(&자식 컴포넌트)
    - state 값 변경 시: state 값을 가진 컴포넌트(&자식 컴포넌트)

3. DOM에 변경사항 반영하기


    - 최소한의 변경사항만 DOM에 반영

4. 브라우저가 화면 다시 그리기

## 7강

### 다양한 타입(number, string, boolean)의 State 다루기
