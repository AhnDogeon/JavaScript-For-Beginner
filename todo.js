const toDoform = document.querySelector(".js-toDoForm"),
    toDoInput = toDoform.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event){
    // delete child element MDN
    const btn = event.target;
    const li = btn.parentNode; 
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        // 여기서 li.id는 string 이므로 int로 파싱
        return toDo.id !== parseInt(li.id);
    });
    // toDos 가 const이므로 let으로 해주어야 할 듯
    toDos = cleanToDos;
    saveToDos();
}


function saveToDos(){
    // LocalStrage는 JS의 string만 저장할 수 있다. 살펴보면 Object로 되어있음
    // localStorage.setItem(TODOS_LS, toDos);
    // 따라서 위와 같이 써주는 것이 아닌 JSON 형태로 object를 string으로 저장 
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId,
    }

    toDos.push(toDoObj);
    saveToDos();

}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){
        // form이 항상 Showing 이므로 else 부분은 딱히 안넣어줘도 될 듯
        
        // Local Storage에 있는 object를 화면에 보여주기
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }

}

function init(){
    loadToDos();
    toDoform.addEventListener("submit", handleSubmit);
}

init();