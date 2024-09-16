## 강좌 소개   
### 리액트란?   
  * UI를 만들기 위한 자바스크립트 *라이브러리*   
  * Facebook이 만듦
  * *지속해서 데이터가 변하는* 대규모 어플리케이션 구축
### 개발환경 구축
  * Node.js 설치   
   
## 1강
### CRA
  * Create React App
  * 프로젝트 생성 명령어
    * npx create-react-app 폴더명(한글x)
  * 프로젝트 실행 명령어
    * 프로젝트폴더의 부모 폴더에서 시작한다
    * cd (폴더명)
    * 실행 명령어: npm start
    * 종료 명령어: ctrl + C
  * 프로젝트 구조
    * public
      * 정적인 리소스(index.html, 아이콘 이미지 등)를 모아놓은 폴더
    * src
      * 소스 코드 파일을 모아놓은 폴더
    * package.json
      * 프로젝트의 메타정보와 해당 프로젝트에 설치된 모듈들에 대한 정도를 json 형태로 모아놓은 파일
    * node_modules 폴더
      * 설치된 모듈들이 모여있는 폴더
      * npm i(또는 install) 명령어로 재설치 가능

  * index.html, App.js, index.js
    * index.js   
      * App요소를 하위요소로 넣어줌
    * 자바스크립트 함수 안에서 요소들을 작성하는 것 -> jsx문법
    * App.js 속 App함수는 컴퍼넌트