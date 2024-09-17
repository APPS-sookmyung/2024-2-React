### 1강. CRA로 리액트 프로젝트 시작하기

#### Create React App (CRA)
- `npx create-react-app 폴더명` 로 빠르게 리액트 프로젝트 생성 가능!
- `npm start`: 개발 서버를 실행시키는 command
- 생성된 리액트 프로젝트는 크게 4가지 구조로 나눌 수 있다 (node_modules, public, src, package.json)
    - **public 폴더**: index.html, 아이콘 이미지 등 정적인 리소스들을 모아놓은 폴더
    - **src 폴더**: 프로젝트 소스(source) 코드 파일들을 모아놓은 폴더
    - **package.json**: 프로젝트의 메타정보와 해당 프로젝트에 설치된 모듈들에 대한 정보들을 json 형태로 모아놓은 파일 (check dependencies)
    - **node_modules**: 설치된 모듈들이 모여있는 폴더. 해당 폴더를 지워도 **npm i** 명렁어로 package.json에 명세된 dependency들 언제든 재설치 가능

- StrictMode: 애플리케이션 내의 잠재적인 문제를 알아내기 위한 도구 (디버깅을 도와줌)

#### 정리:
- **index.html**: body 태그 안에 root라는 id를 가진 div를 확인할 수 있음
- **index.js**: root라는 id를 가진 div(dom element)를 가져와서 ReactDOM의 최상위 노드로 만들어줌 + App이라고 하는 요소를 import 해서 렌더링을 시켜줌 (하위 요소로 넣어줬다는 뜻)
- **App.js**: html element로 화면 구성을 해줌 
- 이렇게 **js 함수 내**에서 html element를 작성할 수 있는 것을 **JSX** 문법이라고 한다 + **App**이라고 하는 함수는 **component**라고 한다

---

### 2강. Components

#### Components (컴포넌트)
- 재사용 가능한 UI 부품
- Component라는 부품을 모아 하나의 화면을 만듦 (화면들이 모여 하나의 프로젝트가 된다)
    - 기존 html의 비효율적인 중복되는 코드 줄여줌!
    - 반복되는 UI를 컴포넌트로 구성
- 간단히 말해, HTML element들의 집합
- 자바스크립트 함수와 유사하다
    - 함수는 input, output이 있음
    - 함수형 컴포넌트도 마찬가지! (input = **props**, output = **html element로 이루어진 UI**)
    - 특정 역할을 수행 (하나의 페이지 안에 여러개의 기능과 feature)
    - 재사용 되는 로직을 모듈화해서 불필요한 반복 작업 줄이기 (어떤 요소를 반복해서 사용하기 위해 컴포넌트 생성=> **좁은 범위의 컴포넌트**)
    - 앞으로 프로젝트에서 각각의 역할에 따라서 컴포넌트를 알맞은 폴더에 모아준다

```JSX
function Product(props) {
    return (
        <div>
            <img src={props.img} alt="제품 이미지" />
            <div>{props.name}</div>
            <div>{props.price}</div>
        </div>
    );
}
```
- Component 첫글자는 항상 대문자로 작성함
- 하나의 페이지는 여러개의 기능들로 이루어져있음 => 컬리 메인페이지 (명절 특가, 상품 추천)
- 반복 작업 줄이기 => 좁은 범위의 컴포넌트 => 컬리 메인페이지 (상품 => 반복됨)