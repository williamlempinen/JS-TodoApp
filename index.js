let bttn = document.getElementById("submit-button");
let todoList = document.getElementById("todos");

function addNewTodo() {
    let input = document.getElementById("input").value;
    var i = document.createElement("li");
    var todo = document.createTextNode(input);
    i.appendChild(todo);
    if (input === "") {
        alert("You have to write a todo to add it on the list!");
    } else {
        todoList.appendChild(i);
    }
    document.getElementById("input").value = "";
}

bttn.onclick = addNewTodo;

// close button and add it to every new todo-item
let listOfItems = document.getElementsByTagName("li");
var i;

for (i = 0; i < listOfItems.length; i++) {
    var span = document.createElement("span");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    listOfItems[i].appendChild(span);
}

//crate a new list item when the button is clicked

