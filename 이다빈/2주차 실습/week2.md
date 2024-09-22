## 3강
### JSX   
  * JSX란?
    * Javascript XML
    * JS 확장 문법
    * JS 내에서 HTML 문법을 사용하는 것
    * JSX는 JS가 아님 -> 브라우저가 이해할 수 없음   
    -> Babel 이라는 컴파일러를 사용해 *JSX->JS로 변환*
    * *Babel은 React 프로젝트에 기본적으로 설치되어있음  

  * JSX가 아닌 문법
  ```
  const Button = React.createElement('button', { className: 'child-btn'}, '버튼');
  const Wrapper = React.createElement('div', {className: 'wrapper'}, Button); //두번째는 props, 세번째는 자식요소

  return Wrapper;
  ```
  * JSX 규칙
    * class 대신 className
    ```
    return (
     <div className="wrapper">
       <button className="child-btn">버튼</button>
     </div>
    );
    ```
    * 부모 요소가 무조건 하나 있어야함
      * div로 묶어주기 싫을 때는 빈 태그 <></>로 감싸주기
      * * 빈 태그는 Fragment라 불림, 실제로 화면에 렌더링되지 않음
      ```
      return (
        <Fragment>
          <button>버튼1</button>
          <button>버튼2</button>
        </Fragment>
      );
      ```
    * JSX 내에서 JS 표현식을 사용하고 싶을 때는 중괄호 사용
    ```
    const name = "Charles";
    const fruits = ['apple', 'banana', 'orange'];

    return (
      <div>
        <button>{name}</button> {/* 중괄호 */}
        <ul>
          {fruits.map((f) => <li>{f}</li>)}
          {/* 함수 map 리스트를 순회하며 li요소 만들기 */}
        </ul>
      </div>
    );
    ```

  * *참고
    * CamelCase: 단어와 단어가 합쳐질 경우 맨 처음 글자를 대문자로 표기하는 방법
    * snake_case: 단어와 단어가 합쳐질 경우 중간에 언더라인(또는 하이픈)을 붙여주는 방법

## 4강   
### Props   
  * Props란?
    * 함수형 컴포넌트의 입력을 받는 곳
    * Properties(속성)의 약자   *속성 ex) src, alt 등
    * 데이터의 전달 방향은 부모 컴포넌트 -> 자식 컴포넌트 (단방향 데이터 흐름)
    * 부모 컴포넌트는 자식 컴포넌트에게 Props로 데이터를 전달
    * 반복 시켜준 자식요소는 구분할 수 있는 key 속성을 가져야함