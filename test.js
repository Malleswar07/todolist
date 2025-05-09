let todoUserInput = document.getElementById("todoUserInput");
let todoAddButton = document.getElementById("addTodoButton");
let todoItemsContainer = document.getElementById("todoItemsContainer");


let todoList = [
    {
      text: "Learn HTML",
      uniqno:1
    },
    {
      text: "Learn CSS",
      uniqno:2
    },
    {
      text: "Learn JavaScript",
      uniqno:3
    }
  ];




todoAddButton.onclick = function() {addTodo();};
function addTodo(){
    let uniqno1 = todoList.length+1;
    let text1 = todoUserInput.value;
    if (todoUserInput.value==""){
        alert('chusukora pumaka');

    }
    else{


    let newtodo = {
        text:text1,
        uniqno:uniqno1
    }
    createTodo(newtodo);
}
todoUserInput.value="";
}
function deletetodo(todoId){
    let todoitem = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoitem)
}

function statusChanger(labelId)
{
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle('checked');
}



function createTodo(todo)
{
    let labelId = "label"+todo.uniqno;
    let checkboxId = "checkbox"+todo.uniqno;
    let TodoId = "todo"+todo.uniqno;


    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = TodoId;
    todoItemsContainer.appendChild(todoElement);


    let inputElement  = document.createElement("input")
    inputElement.type="checkbox";
    inputElement.id=checkboxId
    inputElement.classList.add("checkbox-input");
    inputElement.onclick=function(){
        statusChanger(labelId);
    };
    todoElement.appendChild(inputElement);


    let labelContainer = document.createElement("div")
    labelContainer.classList.add("label-container", "d-flex", "flex-row")
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label")
    labelElement.textContent=todo.text;
    labelElement.id=labelId;
    labelElement.setAttribute("for",checkboxId);
    labelElement.classList.add("checkbox-label");
    labelContainer.appendChild(labelElement);

    let deleteConatiner = document.createElement("div")
    deleteConatiner.classList.add("delete-icon-container")
    labelContainer.appendChild(deleteConatiner)

    let deleteIcon = document.createElement("i")
    deleteIcon.classList.add("fa-solid","fa-trash","delete-icon");
    deleteIcon.onclick=function(){deletetodo(TodoId);};
    deleteConatiner.appendChild(deleteIcon)

}

for (todo of todoList){
    createTodo(todo);
}






