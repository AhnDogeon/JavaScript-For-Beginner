# JavaScript-For-Beginner
바닐라JS로 크롬 앱 만들기

## Settings

##### install Visual Studio Code

필요하다면 Open In Browser

## Day 1

#### Google Chrome App을 만들어보자!

```
Momentum 만들기
```

##### Why JS?

```
프론트엔드는 JavaScript 필수
모든 브라우저는 JS를 사용 -> 전세계 모든 컴퓨터는 브라우저 사용 
-> 전세계 모든 컴퓨터에는 JS가 Install
```

#### Super Power Of JS

```
1. 웹
2. 웹 비디오 게임
3. 웹앱
등등
모두 Interactive 하게 만들 수 있는 Powerful 언어
```

#### JavaScript Version

```
ES5..? ES6?
여기서 ES는 ECMAScript
ES5는 ECMAScript5, ES6는 ECMAScript6

하지만 이번 Repo에서는 Vanilla JS를 이용하여 앱을 제작할 것이다
```

## Day2

#### JavaScript Basic 문법

```
let, const, var ...
아직은 매우 기초적인 내용
쉽다고 넘어가지말고 기초 어느정도 학습 후 넘어갈 것
```

## Day3

Array와 Object!

```javascript
# JS는 Array(리스트)와 Object
# 자바 변수명은 Camel Case
# 소문자로 시작, 스페이스 대신 대문자 

const daysOfWeek = ["mon", "thu", "fri"];
const twoArray = [daysOfWeek, daysOfWeek];

console.log();
console.log(twoArray[1][2]);

# Object : 파이썬과 달리 Key 다음 '=' 이 아닌 ':' 를 사용
const userInfo = {
    name : "V", 
    age : "20",
    city : "Seoul';"
};

# console.log는 console이라는 object 내 log라는 함수 구현하여 접근하는 것
```



Function! 함수

```javascript
# 이제 함수 생성에 대해 학습(드디어 함수다)
function sayHello(name){
    console.log("Hello", name);
}
sayHello("DG");

function sayHello(name, age){
    console.log("Hello", name, age);
}
sayHello("DG", 29);

function sayHello2(name, age){
    console.log(`Hello My name is ${name}, I'm ${age} years old`);
}
sayHello2("DG2", 29);
```



이제 HTML을 JS로 다뤄보자

```javascript
// DOM이란? Document Object Module HTML의 모든 요소를 Object로
const title = document.getElementById("title");

console.log(title);
```



## Day4

DOM

```javascript
// 이를 통해 title의 객체를 볼 수 있다. 해당 객체 수정 가능
console.dir(title);
// 자세한 코드는 index.js 참조
```

```javascript
/////// 여기서부터 HTML을 다뤄보자!
const title = document.getElementById("title");

console.log(title);

title.innerHTML = "Hi from JS";

console.log(title);

console.dir(title);

title.style.color = "red";

// document의 모든 속성도 볼 수 있다.
console.dir(document);

document.title = 'TIL';

// 이제 queryselector로 많이 사용할 것이다.
// #title은 id가 title인 것, .title은 class가 title인 것
const title2 = document.querySelector("#title");
```

## Day5

### Events and event handler

event 란?

```text
웹사이트에서 발생하는 모든 것
ex) click, reisze, submit, input, change, load
```

```javascript
function handlerResize(event){
    console.log("I have been resized");
    console.log(event);
}

function handlerClick(){
    title.style.color = "green";
}

window.addEventListener("resize", handlerResize); // window가 resize를 기다리고 있는 것. resize가 된다면? handlerResize 함수 실행

title2.addEventListener("click", handlerClick);

```

## DAY6

```javascript
// JavaScript event를 알고 싶다면?
HTML JavaScript DOM MDN

// Always Use MDN!
```

##### if, else if, else Using Javascript

```javascript
// 이상하게 기존 Javascript에 이어서 작성하면 if else 구문이 제대로 동작하지 않았다.
// 이유가 title.style.color 부분이 윗 코드에서 같이 먹힌 것 같은데 테스트 필요

const title3 = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
    const currentColor = title3.style.color;
    if (currentColor === BASE_COLOR){
        title3.style.color = OTHER_COLOR;
    } else {
        title3.style.color = BASE_COLOR;
    }
}

function init() {
    title3.style.color = BASE_COLOR;
    title3.addEventListener("click", handleClick);
}

init();
```

