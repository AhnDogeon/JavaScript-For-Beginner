const body = document.querySelector("body");


const IMG_NUMBER = 2;

function handleImgLoad(){
    console.log("finished loading");
}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `Images/landscape${imgNumber + 1}.jpg`;
    // 둘 차이 학습 필요
    // body.appendChild(image);
    body.prepend(image);
    image.classList.add("bgImage");
    // 이 코드는 API에 이미지를 요청할 경우 로딩하는 것 나타낼 때
    // 현재는 local image이므로 console에 아무것도 안나올 것
    image.addEventListener("loadend", handleImgLoad);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();