### 3강. JSX 

#### JSX (Javascript XML)
- 자바스크립트에 XML을 추가한 자바스크립트 확장 문법
- 자바스크립트 내에서 HTML 문법을 사용하는 것

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

- JS 내에서 HTML 문법을 사용해서 컴포넌트의 UI를 구성할 수 있게 해줌
- JSX는 일반 JS 문법이 아니므로, 브라우저가 이해할 수 없음
- 따라서, 리액트는 **Babel**이라는 컴파일러를 사용하여 **JSX -> JS로 변환함**
- CRA로 만든 리액트 프로젝트에는 Babel이 기본적으로 내장 돼 있음

#### JSX 규칙
1. html의 class 대신 **className** 사용
    - props 이름은 camelCase로 지어야 함
2. 무조건 **하나의 부모 요소로 감싸주어야 함**
    - 매번 div를 묶어주면 div를 남발하게 되고 계층이 많이 나누어지면 개발자도구 보기 힘듦
    - 따라서, div로 묶어주기 싫을 때는 빈 태그로 감싸주기
    - 빈 태그는 fragement라고 부르며, 실제로 화면에 렌더링되지 않음
3. JSX 내에서 JS 표현식을 사용하고 싶을 때는 **중괄호** 사용하기

```JSX
// 1.
<div className="wrapper"> </div> // JSX
// <div class="wrapper"> </div> => html

// 2. 
<fragment>
    <button>버튼1</button>
    <button>버튼2</button>
</fragment>

// fragment 태그의 축약형!
<> 
    <button>버튼1</button>
    <button>버튼2</button>
</>

// 3. 
const name = "Charles";
const fruits = ['apple', 'banana', 'orange'];

<div>
    <button>{name}</button>
    <ul>
        {fruits.map((f) => <li>{f}</li>)}
    </ul>
</div>
```

---

### 4강. Props

#### Props (Properties)
- 함수형 컴포넌트가 전달받는 인자
- React는 컴포넌트의 props를 통해서 데이터를 전달해서 원하는 형태의 화면을 만들어줄 수 있음
- 리액트에서 데이터의 전달 방향은 부모 컴포넌트 -> 자식 컴포넌트 **(단방향 데이터 흐름)**
- 부모 컴포넌트는 자식 컴포넌트에게 Props로 데이터를 전달
 
#### 실습 정리:
- ProductPage에서 map 함수로 Product 컴포넌트를 반복시켜줌
- 반복시켜준 자식 요소는 무조건 각각을 유니크하게 구분할 수 있도록 **key** 속성을 가져야 함
  - data의 id 값을 넣어줌
- props를 인자로 그대로 넣어주면 js 객체 타입으로 넘어옴
- 그러므로 js 객체를 **구조 분해 할당(비구조화 할당)** 을 통해서 받아주는게 좋음
- **컴포넌트에서 props를 받을 때 객체 구조 분해 할당으로 받는게 좋음** => Props로 어떤 데이터를 받는지 한눈에 확인할 수 있음
- **이러면 props객체를 반복해서 받을 필요 없음 -> 중복 제거 & 어떤 데이터를 props로 받는지 뒤질 필요없음 & 더 효율적**