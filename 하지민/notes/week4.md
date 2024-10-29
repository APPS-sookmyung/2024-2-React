## 5강: 말 그대로 state

### 상태(state)란?

- 컴포넌트 내부의 변화하는 값
- 특정 상황이나 시점에 따라 달라질 수 있는 값은 state를 만들어 처리해줘야함.
- counter 수
- input 태그의 value 값

### useState란?

- useState 함수의 인자에는 state의 초기값으로 세팅해줄 값을 넣어줌
- useState 함수는 배열을 반환
  - 0번째 인덱스에는 state 값
    - 1번째 인덱스에는 state를 업데이트할 때 사용하는 함수(setter)
