# 📝 학습 목표

---

1. **`QueryParameter`**를 활용하여, 검색 기능을 구현해봅니다.
2. **`Debounce`**와 **`Throttling`**이 무엇인지 알아보고, 이를 실제 프로젝트에 적용해봅니다.
3. **`useContext`**를 활용하여, 전역 상태 관리를 하는 이유와, 기존 코드 리팩토링을 진행해봅니다.
4. **`AccessToken`**과 **`RefreshToken`**을 활용한 로그인 방식에 대해 학습합니다.

# ⚠️  스터디 진행 방법

---

1. 스터디를 진행하기 전, 워크북 내용들을 모두 채우고 스터디에서 서로 모르는 내용들을 스터디원과 함께 공유해 주세요.
2. 실습과 미션은 워크북 내용들을 모두 완료한 후, 스터디 전에 진행해 오세요!
    - 1주 차 스터디 이전에 1주 차 워크북을 완성한 후 스터디를 진행해 주세요.
3. 스터디 시간에는 각자 해 온 미션들을 공유하고, 아래의 과정을 진행합니다.
    1. 스터디원과 함께 코드 리뷰 진행.
    2. 코드 리뷰 이후, 본인의 코드의 문제가 있는 경우 리팩토링 진행.
    3. 팀원들과, 조금 더 코드를 깔끔하게 작성할 수 있는 개선점이 있을지 고민 후, 리팩토링 진행.
    4. 각자 미션을 진행하면서 해결하지 못한 이슈를 공유 후, 해당 이슈를 도움받아 해결.
4. 매주 주어진 미션을 성실하게 제출합니다.
5. 🍠 이모지가 붙어있는 곳은, 직접 여러분들이 채워 넣으셔야 하는 부분입니다. 꼭 Google을 통한 검색을 하시고, VSCode를 활용하여, 실행 결과를 눈으로 보시면서 정리해 주세요!

# 📸 잠깐 ! 스터디 인증샷은 찍으셨나요?📸

---

* 스터디리더께서 대표로 매 주차마다 한 장 남겨주시면 좋겠습니다!🙆💗
 (사진을 저장해서 이미지 임베드를 하셔도 좋고, 복사+붙여넣기해서 넣어주셔도 좋습니다!)

[]()

# 🎯 핵심 키워드

---

<aside>
💡 주요 내용들에 대해 조사해보고, 자신만의 생각을 통해 정리해보세요!
레퍼런스를 참고하여 정의, 속성, 장단점 등을 적어주셔도 됩니다.
조사는 공식 홈페이지 **Best**, 블로그(최신 날짜) **Not Bad**

</aside>

### 키워드 정리 🍠

- Debounce & Throttling 🍠
    - Debounce는 무엇일까요?
        
        Debounce는 연속적으로 호출되는 함수들 중 마지막 함수(또는 제일 처음)만 호출하도록 하는 것
        
    - Debounce는 주로 어디에 사용하나요?
        
        api 호출 시 한번만 수행 ex) 추천 검색어
        
    - Throttling은 무엇일까요?
        
        일정 시간동안 이벤트 핸들러 한번만 실행
        
    - Throttling은 주로 어디에 사용하나요?
        
        주기적으로 이벤트 핸들러를 실행 ex) 스크롤 이벤트 처리
        
    - Debounce와 Throttling의 차이점은 무엇일까요?
        
        debounce : 마지막 함수만 실행
        
        throttling : 일정 시간동안 이벤트 핸들러 한번만 실행
        
    - 어떤 기능을 구현할 때 Debounce를 적용하고, Throttling을 적용하는 것이 좋을까요?
        
        
- 쿠키 🍠
    - 쿠키란 무엇이고, 어떤 특징을 가지고 있을까요?
        
        서버와 정보를 주고받을 때 사용하는 정보를 담든 문자열
        
    - 쿠키를 어떻게 사용할 수 있을까요?
        
        유저 확인용 문자열 저장
        
- 토큰 🍠
    - 토큰이 왜 필요할까요?
        
        유저 정보를 담기 위한 문자열
        
    - CORS 에러가 무엇이고, 이 에러를 어떻게 해결할 수 있을까요?
        
        Cross Origin Resource sharing으로, 출처가 다른 곳에서 요청한 경우 해당 에러를 낸다.
        
        이때, 서버에서 오는 header에 access-control-allow-origin을 요청을 보낸 클라이언트의 주소를 넣어 보내야한다.
        
        아닐 경우 버린다. 정확히는 request의 origin과 response의 access-control-allow-origin이 같아야 한다.
        
    - JWT 토큰 기반 인증 방법이란 무엇일까요?
        
        Json Web Token기반으로, 유저를 인식하는 정보를 secret key를 통해 암호화 한 것을 사용자가 사용하는 것이다.
        
    - JWT 기반 로그인 동작 과정에 대해 알아보세요.
        
        로그인으로 해당 토큰을 받으면, 유저가 유저 정보를 전달해야 할 때마다 request에 해당 token을 넣는다.
        
        이를 서버에서 받아 어떤 유저인지 확인하고 관련 정보들을 보낸다.
        
    - AccessToken / RefreshToken의 차이에 대해 설명해주세요.
        
        AccessToken은 수명이 짧고, 유저 정보에 접근할 수 있다.
        
        RefreshToken은 수명이 길고, 만약 살아있다면 유저 정보를 받을 수 있다.
        
- 웹 스토리지 🍠
    - 웹 스토리지의 메소드와 프로퍼티는 어떤게 있을까요?
    - 세션 스토리지에 대해 정리해 주세요!
    - 로컬 스토리지에 대해 정리해 주세요!
    - 로컬 스토리지에서 JWT 토큰을 저장하고, 사용하고, 삭제하는 메소드에 대해 찾아보세요!
    - 스토리지가 변경되었을 때 처리하는 방법을 조사해 주세요.
    - Bearer Token이 무엇인지 찾아보고, 이를 통해 백엔드 서버와 어떠한 방식으로 통신하는지 조사해 보세요!
- Context-API 🍠
    - 전역 상태 관리는 왜 해야할까요?
        - props drilling 방지
        - 데이터 일관성
    - Context API란 무엇일까요?
        
        

<aside>
🍠

잘 이해가 되시지 않는다면, 아래 영상을 참고해도 좋습니다!

</aside>

https://www.youtube.com/watch?v=WQHuqL2S74o&t=877s

https://www.youtube.com/watch?v=WQHuqL2S74o&t=877s

# ✅ 실습

- [ ]  기존 2주차 `React`로 제작한 **`ToDoList`**를, **`Context-API`**를 활용하여 **`리팩토링을 진행`**해주세요!
- 깃허브 주소
- 실행 영상

# 🔥 미션 1. 회원가입 / 로그인 API 연결

<aside>
💡

아래, BE 서버를 활용하여, 아래와 같은 화면을 구현해주세요.
‣

</aside>

### 1. 회원가입

![스크린샷 2024-09-30 오전 12.17.05.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/78d333fa-aa22-492f-828f-335b3927525d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-30_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.17.05.png)

- [x]  **`회원가입 API`**를 잘 연결하였는가?
- [x]  회원가입 후, `login 페이지`로 이동하였는가?

### 2. 로그인

![스크린샷 2024-09-30 오전 12.18.19.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/12e13eac-1a6d-4ea4-8688-970d2283b60f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-30_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.18.19.png)

- [x]  **`로그인 API`**를 잘 연결하였는가?
- [x]  로그인 후, `메인 페이지`로 이동하였는가?
- [x]  **`AccessToken`**과, **`RefreshToken`**을 **`로컬스토리지에서 저장`**하였는가?

### 3. 로그인 후 메인 페이지 이동 시

![스크린샷 2024-09-30 오전 12.14.44.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/b095f639-230d-4bb4-9fc4-69cee14ada08/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-30_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.14.44.png)

- [x]  **`Navbar`**의 로그인, 회원가입 버튼 대신, **`로그아웃 버튼`**을 보여주었는가?
- [x]  **`유저 정보 불러오기 API`**를 호출하여, 로그인 한 유저 이메일 **`@ 기준 앞 부분(닉네임)`**을 Navbar에 잘 보여주었는가?

### 4. 로그아웃 시

![스크린샷 2024-09-30 오전 12.21.38.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/219d8a2b-3eac-4149-a144-c36676387d4f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-30_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.21.38.png)

- [x]  로그아웃 후, Navbar에 유저 정보가, 사라지며, **`로그인, 회원가입 버튼이 다시 생겼는가?`**
- [x]  **`AccessToken`**과, **`RefreshToken`**을 **`로컬스토리지에서 제거`**하였는가?

### 5. 추가로 해보면 좋아요!

- [ ]  `refreshToken을 활용`**하여,** `토큰 재발급`**을 진행해보세요.**
    - [ ]  **`Axios Interceptor`**를 활용하여, **`refreshToken`**을 활용하여, **`accessToken`**을 **`재발급`** 받는 로직을 구글 검색을 통해, 직접 해결해보세요!
    - [ ]  **`refreshToken`**을 활용하여, 토큰 재발급을 진행하면, 어떤 부분에서 이점이 있는지 작성해주세요!
    - 어떤 장점이 있을까요?

### 🔥 미션 1. 제출

- 깃허브 주소
- 실행 영상

# 🔥 미션 2. QueryParameter 활용 검색 기능 구현

<aside>
💡

아래와 같은, 여러 조건에 대하여 활용해서 검색 기능을 구현해주세요.
단, **`Query-Parmeter`**를 효율적으로 활용해서, 구현해주세요!

</aside>

- [x]  **`Styled-Components`**를 활용해주세요
- [x]  기존에 만들었던, **`movie-card 컴포넌트`**를 재사용해주세요.

1. 영화 제목 검색어를 입력하지 않는 경우 (`/search` 경로에 처음 온 경우)
    
    ![스크린샷 2024-09-25 오후 8.39.03.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/b4deb1da-f975-4254-8e2c-629fead9ec2b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-25_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.39.03.png)
    

1. 영화 제목 검색어를 입력한 경우
    
    ![스크린샷 2024-09-25 오후 8.40.23.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/53f552ef-5ecf-451f-95c3-6c0ce839ab3e/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-25_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.40.23.png)
    

1. 영화 검색어를 입력했으나, 해당 검색어의 영화 데이터가 존재하지 않는 경우.
    
    ![스크린샷 2024-09-25 오후 8.48.41.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/5f4401e5-85aa-4ea3-999f-35982279b4a6/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-25_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.48.41.png)
    

1. 로딩 중인 경우, 아래와 같은 **`Skeleton UI`**를 만들어주세요!

[화면 기록 2024-09-25 오후 9.49.33.mov](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/acd1e244-c55b-48ea-b5dc-d3df7f22c7e8/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2024-09-25_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.49.33.mov)

1. **`Debounce`**에 대한 키워드를 학습하셨나요?
    - [x]  **`Debounce`** 가 무엇인지 작성해주세요~!
        - Debounce는 무엇인가요?
    - [x]  Debounce를 검색 기능에 적용해주세요!
        - 실행 영상 첨부
        
- [ ]  혹시라도, 구현에 어려움을 느끼신 경우, 아래 영상을 참고해서, 미션을 수행해주세요.

https://www.youtube.com/watch?v=L3eGGsAyd_A

### 🔥 미션 2. 제출

- 깃허브 주소
- 실행 영상

# ⚡ 트러블 슈팅

---

<aside>
💡 실습하면서 생긴 문제들 또는 어려웠던 내용에 대해서, **이슈 - 문제 - 해결** 순서로 작성해주세요.

</aside>

- ⚡이슈 No.1 (예시, 서식만 복사하시고 지워주세요.)
    
    **`이슈`**
    
    👉 앱 실행 중에 노래 다음 버튼을 누르니까 앱이 종료되었다.
    
    **`문제`**
    
    👉 노래클래스의 데이터리스트의 Size를 넘어서 NullPointException이 발생하여 앱이 종료된 것이었다. 
    
    **`해결`**
    
    👉  노래 다음 버튼을 눌렀을 때 데이터리스트의 Size를 검사해 Size보다 넘어가려고 하면 다음으로 넘어가는 메서드를 실행시키지 않고, 첫 노래로 돌아가게끔 해결
    
    **`참고레퍼런스`**
    
    - 링크

# 📢 학습 후기

---

- 이번 주차 워크북을 해결해보면서 어땠는지 회고해봅시다.

<aside>
📢

</aside>

# 🤔 참고 자료

---

Copyright © 2024 Kim Yongmin (Matthew) All rights reserved.