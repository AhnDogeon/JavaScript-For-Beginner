const clockContainer = document.querySelector(".js-clock"),
 clockTitle = clockContainer.querySelector("h1");


 function getTime() {
     const date = new Date();
     const minutes = date.getMinutes();
     const hours = date.getHours();
     const seconds = date.getSeconds();
     clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
         minutes < 10 ? `0${minutes}` : minutes
        }:${seconds < 10 ? `0${seconds}` : seconds}`;
 }
function init() {
    getTime();
    setInterval(getTime, 1000); // getTime 함수를 1000ms에 한 번씩 실행하는 함수! 유용한 Timer 함수
}

init();