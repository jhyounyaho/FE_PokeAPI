# API 사용하여 포켓몬 도감 만들기

### 1. 개발 환경
- HTML5
- Javascript
- CSS

### 2. library
jquery	3.3.1

### 3. 디렉토리     
    ├── css                         # css파일 저장 폴더     
    └── js                          # js파일 저장 푤더       
        ├── jquery-3.3.1.min.js     # jquery     
        ├── PocketmonManager.js     # PocketmonManger class 로직이 있는 file      
        ├── Pocketmon.js            # Pocketmon class 로직이 있는 file      
        └── script.js               # index.html에서 로드하는 스크립트 file      
    └── index.html                     
    
### 4. 기능 
- https://pokeapi.co/api/v2/pokemon/ 사용하여 API 통신 후 포켓몬 정보 노출 
- Promise 비동기 처리 
- 사용자가 입력한 숫자에 맞는 포켓몬 이미지, 이름, 높이, 무게 정보 노출
- 입력한 값 유효성 검사 (빈값, !숫자, 0)
- 포켓몬 api 에 없는 숫자 입력시 404 체크하여 alert 노출

### 5. 결과 화면
