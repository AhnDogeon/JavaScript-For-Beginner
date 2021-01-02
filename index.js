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