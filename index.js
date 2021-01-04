let a = 221;
let b = a - 5;
a = 4;
console.log(b, a);

alert("I'm JS. Hello World!");

const daysOfWeek = ["mon", "thu", "fri"];
const twoArray = [daysOfWeek, daysOfWeek];

console.log();
console.log(twoArray[1][2]);

const userInfo = {
    name : "V", 
    age : "20",
    city : "Seoul';"
};
// const 라도 내부값은 바꾸기 가능, 단 userInfo라는 object 자체는 변경 불가
console.log(userInfo.name);

userInfo.name = "A";

console.log(userInfo.name);

function sayHello(name, age){
    console.log("Hello", name, age);
}
sayHello("DG", 29);

function sayHello2(name, age){
    console.log(`Hello My name is ${name}, I'm ${age} years old`);
}
sayHello2("DG2", 29);


const calculator = {
    plus: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    multiply: function(a, b){
        return a * b;
    },
    divide: function(a, b){
        return a / b;
    },
    squared: function(a, b){
        return a ** b;
    },
}

const plus = calculator.plus(5,6);
console.log(plus);

console.log(calculator.squared(4,3));


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

// Day5
// event를 배워보자
function handlerResize(event){
    console.log("I have been resized");
    console.log(event);
}

function handlerClick(){
    title.style.color = "green";
}

window.addEventListener("resize", handlerResize); // window가 resize를 기다리고 있는 것. resize가 된다면? handlerResize 함수 실행

title2.addEventListener("click", handlerClick);

// if else
if (10 < 5){
    console.log("Hi");
} else if (10 === 10){
    console.log("Ho");
} else {
    console.log("nooooo");
}

const age = prompt("How old are you?"); // 매우 오래된 JS

if (age > 20){
    console.log("you are adult");
} else if (age>18 && age <= 20){
    console.log("you are student");
} else {
    console.log("Welcome");
}



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


// 번외 MDN 이용해서 찾은 event 사용

function handleOffline(){
    console.log("handleOffline");
}
window.addEventListener("offline", handleOffline);