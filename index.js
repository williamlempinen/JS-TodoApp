let addItemButton = document.getElementById("submit-button");
let todoList = document.getElementById("todosUl");

//create a new list item when the button is clicked
function addNewTodo() {
    let input = document.getElementById("input").value;
    var liItem = document.createElement("li");
    var todo = document.createTextNode(input);
    liItem.appendChild(todo);
    var liButton = document.createElement("button");
    liButton.className = "closeButton";
    liButton.innerHTML = "X";
    liItem.appendChild(liButton);
    liItem.id = "listItem";
    if (input === "") {
        alert("You have to write a todo to add it on the list!");
    } else {
        todoList.appendChild(liItem);
        document.getElementById("input").value = "";
    }
}
/*
//by click created close-button on li-item -> remove li-item (not working, don't know why)
var itemCloseButton = document.getElementsByClassName("closeButton");
var i;
for (i = 0; i <= itemCloseButton.length; i++) {
    itemCloseButton[i].onclick = function() {
        itemCloseButton.parentElement.remove;
    }
}
*/

addItemButton.onclick = addNewTodo;




