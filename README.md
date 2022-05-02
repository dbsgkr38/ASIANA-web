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
