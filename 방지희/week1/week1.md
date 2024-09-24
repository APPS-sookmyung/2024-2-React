## 간단 예제로 배워보는 React

---

## 1강. 리액트 시작은 이것부터? - CRA

- Create React App
- { npx create-react-app my-app(프로젝트명) (-> success가 뜨면 잘 생성된 것)
  cd my-app
  npm start } -> 터미널에서 이 코드로 리액트 프로젝트 생성할 수 있음
- 터미널에서 code . 하면 바로 VS Code 실행

---

### CRA로 생성한 리액트 프로젝트 구조

- public 폴더: index.html, 아이콘 이미지 등 정적인 리소스들을 모아놓은 폴더
- src 폴더: 프로젝트 소스(source) 코드 파일들을 모아놓은 폴더
- package.json: 프로젝트의 메타정보와 해당 프로젝트에 설치된 모듈들에 대한 정보들을 json 형태로 모아놓은 파일
- node_modules 폴더: 설치된 모듈들이 모여있는 폴더. 해당 폴더를 지워도 npm i(혹은 install) 명령어를 실행하면 package.json에 명세된 dependency들이 설치됨

---

- ctrl + c : 개발 서버 내리기
- render 메서드로 하위 요소들 rendering (ex. root.render)
- <React.StrictMode>모드는 개발 상황에서 문제의 디버깅을 도와줌
- javascript 함수 안에서 html element를 작성하는 것: JSX 문법
- App이라고 하는 함수는 component라고 한다.

---

### 주요 파일 연관 구조

index.js에서 index.html의 id가 root인 div를 가져와서 ReactDOM에 최상위 노드로 만들어줌
그리고 App이라는 요소를 import해서 rendering함
App.js에서 html의 요소들로 화면을 구성함

---

## 2강. 이거 알면 절반은 간다 - Components

- 컴포넌트를 통해 UI를 재사용 가능한 개별적인 여러 조각으로 나누고, 각 조각을 개별적으로 살펴 볼 수 있다.
- 개념적으로 컴포넌트는 JavaScript 함수와 유사하다.
- "props"라고 하는 임의의 입력을 받은 후, 화면에 어떻게 표시되는지를 기술하는 React 엘리먼트를 반환한다.
- 재사용 가능한 UI 부품
- Component라는 부품을 모아 하나의 화면을 만든다. -> 기존 html의 비효율적인 중복되는 코드를 줄여준다.
- HTML element들의 집합

- 함수형 Component(최신!), 클래스형 Component
- 함수형 Component에서 입력은 Props(인자), 출력은 (JSX 문법으로 작성한, html 요소들로 구성된) UI

- javascript 안에 html 문법을 쓸 수 있는 javascript 확장 문법를 JSX라고 한다.

### Components는 Javascript 함수다

- 어떤 경우에 우리는 함수를 만들까?
- 특정 역할을 수행하게 하려고(features, pages...)
- 재사용되는 로직을 모듈화해서 불필요한 반복 작업을 줄이려고(좁은 범위의 components)

### Product.jsx

```jsx
import React from "react";

function Product() {
  return <div></div>;
}

export default Product; //하나의 javascript 파일 안에서 메인이 되는 component는 export default로 해야 한다.
//또 다른 component를 같은 javascript 파일 안에서 사용하고 싶으면 그냥 export만 해야 한다.
export function Test() {
  return <div></div>;
}
```

- component는 항상 대문자로 시작해야 한다.
- 'ES7 + React' extension으로 다양한 형태의 component를 만들 수 있다. (ex. rfc, rfce, rafce...)
