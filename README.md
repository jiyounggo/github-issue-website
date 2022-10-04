#  특정 깃헙 레파지토리의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축

<br/>

## 과제 소개

- 특정 깃헙 레파지토리 [angular-cli](https://github.com/angular/angular-cli) 의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축
- [과제 안내 링크](https://younuk.notion.site/27bf1cfefdce49f89d16bd14a9ff7f70)

<br/>



## 배포 링크 및 데모 영상

- [배포 링크](https://wanted07-github-issue.netlify.app/)

- [데모 영상](https://drive.google.com/file/d/149RSeV9gSgwkZlRS9iBtaYkOx5yxHjP5/view?usp=sharing)

<br/>

## 목차 

- [팀원 소개](#팀원-소개)
- [실행 방법](#실행-방법)
- [폴더 구조](#폴더-구조)
- [프로젝트 기능 구현](#프로젝트-기능-구현)
- [프로젝트 설명](#프로젝트-설명)
- [라우팅](#라우팅)
- [커밋 컨벤션](#커밋-컨벤션)

<br/>




## 실행 방법

```
$ git clone https://github.com/pre-on-boarding-fe-7team/week3-1-github-issue-website.git
```


```
/* step 1 */

 $ npm i


/* step 2 */

  .env.sample을 적용하여 API 연동한다.
  

/* step 3 */

 $ npm start
```


<br/>


## 폴더 구조

<details><summary>폴더구조
</summary>

  <br/>
  
```
📦src
 ┣ 📂api
 ┃ ┗ 📜IssueApi.jsx
 ┃ ┗ 📜api.js
 ┣ 📂common
 ┃ ┗ 📂hooks
 ┃ ┃ ┗ 📜useFetch.js
 ┃ ┗ 📂utils  
 ┃ ┃ ┗ 📜constant.js
 ┃ ┃ ┗ 📜convertDate.js
 ┃ ┃ ┗ 📜loading.js
 ┣ 📂components
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┣ 📜Header.style.js
 ┃ ┣ 📂Loading
 ┃ ┃ ┗ 📜Loading.jsx
 ┃ ┃ ┗ 📜Loading.style.js
 ┣ 📂context
 ┃ ┃ ┗ 📜APIContext.js
 ┣ 📂pages
 ┃ ┣ 📂Error
 ┃ ┃ ┣ 📜Error.jsx
 ┃ ┣ 📂IssueDetail
 ┃ ┃ ┣ 📜IssueContent.jsx
 ┃ ┃ ┣ 📜IssueDetail.jsx
 ┃ ┃ ┣ 📜IssueDetail.style.js
 ┃ ┣ 📂Main
 ┃ ┃ ┣ 📂Issues
 ┃ ┃ ┃ ┣ 📜Issues.jsx
 ┃ ┃ ┃ ┣ 📜Issues.style.js
 ┃ ┃ ┣ 📜Main.jsx
 ┃ ┃ ┣ 📜Main.style.js
 ┃ ┣ 📂NotFound
 ┃ ┃ ┣ 📜NotFound.jsx
 ┣ 📂styles
 ┃ ┣ 📜global-styles.js
 ┃ ┗ 📜theme.js
 ┣ 📜App.js
 ┗ 📜index.js
```

## </details>

<br/>



## 프로젝트 기능 구현
- 공통

  - 이슈 목록 및 상세 화면 기능 구현

  - Context API를 활용한 API 연동
 
  - 지정된 조건(open 상태, 코멘트 많은 순)에 맞게 데이터 요청 및 표시
   
  - 데이터 요청 중 로딩 표시
   
  - UI는 데스크톱, 모바일에서 보았을 때 모두 읽기 편하게 구현

  - 두 페이지는 공통 헤더를 공유합니다.

  - 헤더에는 Organization Name / Repository Name이 표시됩니다.

  
  <br/>
  
- issue 리스트 페이지

  - 이슈 목록 가져오기 API 활용
   
  - open 상태의 이슈 중 코멘트가 많은 순으로 정렬 
   
  - 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시 
   
  - 다섯번째 셀에는 광고 이미지 출력 ( 광고 이미지 클릭 시 https://thingsflow.com/ko/home로 이동 )
   
  - 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)

  
  <br/>


- Issue 디테일 페이지
 
  - 이슈의 상세 내용 표시
   
  - ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시

  <br/>
   


## 프로젝트 설명

###  ✔ Best Practice


  <br/>



 ### 데이터 및 상태관리

1 . 데이터 요청 error, loading, data 관리 .

 - useFetch라는 useCustomHook을 만들어 한 파일 내에서 데이터 요청에 따른 error, loading, data를 관리하였다.

   → 위 3가지 값을 useFetch를 사용하는 페이지 내에서 길어지는 코드 없이 공통의 코드로 동일하게 위 3가지 값을 처리할 수 있다.

<br/>

2 . api 관련 URL, 함수, KEY 관리

 - api와 관련된 위 3가지 모두 api.js 파일에서 관리하였다. 

   → 이후에 baseURL, headers 등의 공통된 내용이 변경될 경우 혹은 각 요청의 URL 및 Params가 변경될 경우 api.js 파일 내에서 쉽게 유지-보수가 가능하다.
   
   
   <br/>
   
 3 . Context API를 활용한 API 연동
 
   - 초기에 useFetch 커스텀훅을 통해 전달받은 data, isLoading, error 상태를  context 객체가 보관하고 각 페이지에서 loading, error, 호출 성공에 대한 분기 처리를 하였지만
    
     → loading, error 처리에 대한 일관성을 위해 해당 처리를 내부에서 수행하는 공통 컴포넌트를 생성하여 context 객체에서 보관하고 페이지마다 상황에 맞는 api 컴포넌트를 사용하도록         구현하였다.
   
      <br/>
   
### 인피니트 스크롤
   
 1 . Intersection Observer API 를 이용한 인피니티 스크롤 구현
 
   - scroll event를 사용하면 사용자가 스크롤 할 때마다 이벤트가 발생하기 때문에 비효율적이라고 판단하여
     Intersection Observer를 통해 target과 root 요소 사이의 intersection 내 변화를 비동기적으로 인지하여 다음 데이터를 조회하였다.
     
   - 언마운트 시 이벤트를 해제하지 않아 이벤트가 누적되는 문제가 발생하여, useEffect에서 언마운트 시 unobserve 하도록 추가
   
   
 <br/>
 <br/>


### 전역 스타일 설정

1 . Globalstyled 과 Theme으로 공통된 스타일 관리

  - Globalstyled로 전체 페이지의 기본 스타일을 세팅하였으며, Theme을 통해 자주 사용되는 CSS 및 반응형의 형식을 세팅하였다.   
  
   
 <br/>

## 라우팅

- "/"  :  Issue 리스트 조회 
     
- "/:number"  :  Issue 디테일 내용 조회
     
- "*"  :  라우팅 처리 안 된 곳 들어갈 시

<br/>

## 커밋 컨벤션
```
- type : 어떤 의도로 커밋했는지를 type에 명시한다. (type: 뒤의 스페이스바는 한번이다.)
- subject : 최대 50글자가 넘지 않도록 하고 마침표는 찍지 않는다. 제목의 처음은 동사 원형으로 시작한다.
- body : 긴 설명이 필요한 경우에 작성한다. 어떻게 했는지가 아니라, 무엇을 왜 했는지를 작성한다. 최대 75자를 넘기지 않도록 한다.

ex)
Feat: 추가 로그인 함수
```

<details><summary>커밋 태그 이름 및 설명
</summary>
  
  <br/>
  
```
Feat - 새로운 기능을 추가할 경우

Fix - 버그를 고친 경우

Design - CSS 등 사용자 UI 디자인 변경

!BREAKING CHANGE - 커다란 API 변경의 경우

!HOTFIX - 급하게 치명적인 버그를 고쳐야하는 경우

Style - 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우

Refactor - 프로덕션 코드 리팩토링

Comment - 필요한 주석 추가 및 변경

Docs - 문서를 수정한 경우

Test - 테스트 추가, 테스트 리팩토링(프로덕션 코드 변경 X)

Chore - 빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X)

Rename - 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우

Remove - 파일을 삭제하는 작업만 수행한 경우
```
  </details>


