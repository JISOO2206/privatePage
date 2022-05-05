const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list-box");

const TODOS_KEY = "saveToDo";

let saveToDo = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(saveToDo));
}

function paintToDo(newTodo) {
  const newToDoSpace = document.createElement("li");
  newToDoSpace.id = newTodo.id;
  const newToDoContent = document.createElement("span");
  newToDoContent.innerText = newTodo.text;
  const ToDoDeleteBtn = document.createElement("button");
  ToDoDeleteBtn.innerText = "X";
  toDoList.addEventListener("click", deleteToDo);
  newToDoSpace.appendChild(newToDoContent);
  newToDoSpace.appendChild(ToDoDeleteBtn);
  toDoList.appendChild(newToDoSpace);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text:newTodo,
    id: Date.now()
  };
  saveToDo.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

function deleteToDo(event) {
    const deleteToDoContent = event.target.parentElement;
    deleteToDoContent.remove();
    saveToDo = saveToDo.filter((saveToDo) => saveToDo.id !== parseInt(deleteToDoContent.id));
    saveToDos();
}


toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
  //addEventListener가 event를 제공하는 것처럼
  //js 함수도 item을 제공함.
  console.log("this is the turn of ", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  /*parsedToDos.forEach((item) => console.log("this is the turn of ", item));*/
  // 50번 줄의 forEach는 한 개의 function만 실행할 수 있게 해준다.
  // (item) => console.log("this is the turn of ", item)의 형태를 arrow function이라고 한다.
  // function 과 arrow function 모두 동일한 기능을 한다.
  saveToDo = parsedToDos;
  parsedToDos.forEach(paintToDo);

}
