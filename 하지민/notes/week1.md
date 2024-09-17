## 1강 리액트 시작은 이것부터?-CRA

- `index.html` 파일에서는 `<body>` 태그 안에 *root*라는 id를 가진 `<div>`가 하나 있었음
- `index.js` 파일에서는 *root*라는 id를 가진 `div`, `DOM element`를 가지고 와서 `ReactDOM`의 최상위 노드로 만들어 주었음, 거기에 App이라고 하는 요소를 import 해서 렌더링해주었음= 하위 요소로 넣어준 것.
- `app.js`에서는 우리가 원하는 화면 구성을 위해 html element들로 화면 구성해줌.

## 2강 이거 알면 절반은 간다-Components

- Components란?
  - 재사용 가능한 UI 부품
  - 기존의 html 비효율적인 중복되는 코드 줄여줌
  - 쉽게 말해 HTML element들의 집합
  - javascript 함수
