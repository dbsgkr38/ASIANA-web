# ASIANA-web


## bx-slider
```html
<div class="bxslider">
  <div><img src="/assets/images/coffee1.jpg" title="Funky roots"></div>
  <div><img src="/assets/images/coffee2.jpg" title="The long and winding road"></div>
  <div><img src="/assets/images/coffee3.jpg" title="Happy trees"></div>
</div>
```

``` javascript
$(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 600
  });
});
```

## calendar 

calendar가 구현될 수 있도록 하였습니다.


```html
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="/resources/demos/style.css">
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
```

```html
<input type="date" class="tab-cont__check-start" name="trip-start" value="2022-03-01"
                                    min="2022-03-16" max="2022-03-31">
```

# lodash를 활용하여 scroll함수 제어하기
scroll이벤트가 계속 실행되면 사이트가 무거워 질 수 있으므로 이런 부분을 제어 할 수 있는 플러그인이 lodash를 설치하여 보자. [https://cdnjs.com/libraries/lodash.js]

# gsap을 이용해 애니메이션 효과주기
GSAP(The GreenSock Animation Platform)은 자바스크립트로 제어하는 타임라인 기반의 애니메이션 라이브러리입니다. ScrollToPlugin은 스크롤 애니메이션을 지원하는 GSAP 플러그인입니다. [https://cdnjs.com/libraries/gsap]

```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js" integrity="sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js" integrity="sha512-nTHzMQK7lwWt8nL4KF6DhwLHluv6dVq/hNnj2PBN0xMl2KaMm1PM02csx57mmToPAodHmPsipoERRNn4pG7f+Q==" crossorigin="anonymous"></script>
```

#Tab-menu

tab 메뉴 틀을 작성하여 애니메이션 처럼 구현되도록 작성하였다

```html
<section id="wrapper">
            <div class="content">
               <!-- Tab links -->
               <div class="tabs">
                  <button class="tablinks active" data-country="London"><p data-title="reserve">항공권 예약</p></button>
                  <button class="tablinks" data-country="Paris"><p data-title="checkin">체크인</p></button>
                  <button class="tablinks" data-country="Barcelona"><p data-title="search">출도착 조회</p></button>
                  <button class="tablinks" data-country="Madrid"><p data-title="hotel/rent">호텔/렌터카</p></button>
               </div>
         
               <!-- Tab content -->
               <div class="wrapper_tabcontent">
                   <div class="wrapper-inner">
                       
                  <div id="London" class="tabcontent active">
                    <h3>reserve</h3>
                    <div class="tab_top">
                        <ul>
                            <li class="tab1"><a href="#">왕복</a></li>
                            <li class="tab2"><a href="#">편도</a></li>
                            <li class="tab3">
                                <a href="#">다구간 </a>
                                <span class="material-icons">arrow_drop_down</span>
                            </li>
                        </ul>
                    </div>
                        <span class="tab4">마일리지사용</span>
                        <div class="tab__text">
                            <ul>
                                <li class="tab5"><a href="javascript:void(0)">
                                        <label for="number" class="hidden"></label>
                                        <input type="text" placeholder="출발지" id="start">
                                        <span class="material-icons">place</span>
                                    </a>
                                </li>
                                <li class="tab6"><a href="javascript:void(0)">
                                        <label for="number" class="hidden"></label>
                                        <input type="text" placeholder="도착지" id="end">
                                        <span class="material-icons">place</span>
                                    </a>
                                </li>
                                <li class="tab7"><a href="javascript:void(0)">
                                        <input type="date" class="reserve__text-start" 
                                        name="탑승일" value="탑승일"
                                            min="2022-03-16" max="2023-12-31">
                                    </a>
                                </li>
                                <li class="tab8"><a href="javascript:void(0)">
                                        <label for="number" class="hidden"></label>
                                        <input type="text" placeholder="탑승객" id="person">
                                        <span class="material-icons">person_add</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
```

```javascript
var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");


tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});


function openTabs(el) {
   var btnTarget = el.currentTarget;
   var country = btnTarget.dataset.country;

   tabContent.forEach(function(el) {
      el.classList.remove("active");
   });

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + country).classList.add("active");
   
   btnTarget.classList.add("active");
}
```

# Google Fonts
페이지에서 사용할 '나눔고딕' 폰트를 지정합니다.

```css
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap" rel="stylesheet" />
main.css보다 먼저 읽혀 들어갈 수 있도록 위에다가 선언한다.
```

# Google Material Icons
main.css보다 먼저 읽혀 들어갈 수 있도록 위에다가 선언한다.

```css
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```
사용할 부분에는 다음과 같이 사용한다.

```
<div class="material-icons">upload</div>
```
