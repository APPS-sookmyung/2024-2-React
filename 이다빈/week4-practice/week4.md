## 5강

### State

- State란?

  - 컴포넌트 내부의 _변화하는 값_ (ex 상품의 수량)
  - 특정 상황이나 시점에 따라 달라질 수 있는 값은 state를 만들어 처리해줘야 함

- useState란?

  - ```
    import { useState } from "react";
      ...
      const [count, setCount] = useState(0);

    ```

  - useState 함수의 인자에는 state의 초기값을 넣어줌

  - useState 함수는 배열을 반환

    - 0번 째 인덱스에는 state 값
    - 1번 째 인덱스에는 state를 업데이트할 대 사용하는 함수(setter)

  * _규칙_
    - state 값은 setter 함수로만 변경 가능
    - 일반적으로 setter 함수는 state 이름 앞에 "set"을 붙여서 작성
