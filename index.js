let bttn = document.getElementById("submit-button");
let todoList = document.getElementById("todosUl");



//crate a new list item when the button is clicked
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
    
    let closeButton = document.getElementsByClassName("closeButton");
    closeButton.onclick = function () {
        var item = this.parentElement;
        item.style.display = "none";
    }
}

bttn.onclick = addNewTodo;
clsBttn = document.getElementsByTagName("button");

clsBttn.onclick = function () {
    var item = this.parentElement;
    item.display = "none";
    alert("moikka");
}


