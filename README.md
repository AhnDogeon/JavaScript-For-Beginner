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
// DOM이란? Document Object Module
const title = document.getElementById("title");

console.log(title);
```

