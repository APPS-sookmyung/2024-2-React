# 5.25 ~ 5.26 개념 정리

# 6.27

## OpenAI 사용

- https://github.com/public-apis/public-apis

## fetch()

- url 불러오기
- https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch

# 6.28

## OpenAI 연동

- await과 .then

# 6.29

- useEffect로 감싸지 않으면 계속 호출됨

# 6.30

## useEffect

- 보통 UI를 새로 그릴 때마다 호출됨
- 호출되는 시점을 제한하고 싶을 때 사용
- React.useEffect(() => {}, []);
- [] 컴포넌트가 맨 처음 호출될 때만 호출됨

# 6.31

- .includes
- 배열 함수, 요소 포함 시 true 아니면 false

# 6.33

- 페이지 실행 될 때 한번만 localStorage에 접근하면 => 함수 사용
- 미스매치로 인해 성능 저하 => 이전값을 props로 넘겨받는 함수로 작성

# 7.34

## create-react-app

- 초기 개발에 필요한 모든 것을 세팅해주는 라이브러리
