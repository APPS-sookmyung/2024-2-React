- counterState는 React의 useState로 상태를 관리한다는 뜻
- useState의 첫번째 인자는 counter 그 자체고 두번째 인자는 카운터를 조작하는 함수
- 상태를 다른 컴포넌트에서 선언하도록 바꾸고 위에서 만든 상태를 자식 컴포넌트에 넘겨준다.

---

- 구조분해할당: 해당 components가 어떤 데이터를 받는지 알기 쉬움
- useState: component에서 state 다룰 때 사용하는 함수, 배열을 반환함.
- const[count, setCount] = useState(0);에서 count=state값, setCount=state를 업데이트할 때 사용하는 함수(setter)
- state가 아닌 일반 변수는 렌더링 일으킬 수 없음
- Synthetic base event= 모든 브라우저의 이벤트 객체를 하나의 포맷으로 통일한 형태
