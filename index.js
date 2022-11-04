let bttn = document.getElementById("submit-button");
let todoList = document.getElementById("todos");

//crate a new list item when the button is clicked
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
    var closeButton = document.createElement("span");
    var text = document.createTextNode("\u00D7");
    span.className = "close-button";
    span.appendChild(text);
    listOfItems.appendChild(span).join("");

    for (i = 0; i < closeButton.length; i++) {
        closeButton[i].onclick = () => {
            var div = this.parentElement;
            div.style.display = "none";
        }
      }
}

bttn.onclick = addNewTodo;

// close button and add it to every new todo-item
let listOfItems = document.getElementsByTagName("li");
var i;

for (i = 0; i < listOfItems.length; i++) {
    var span = document.createElement("span");
    var text = document.createTextNode("\u00D7");
    span.className = "close-button";
    span.appendChild(text);
    listOfItems[i].appendChild(span);
}

let closeButton = document.getElementsByClassName("close-button");

//click on a close button to hide the current list item
for (i = 0; i < closeButton.length; i++) {
    closeButton[i].onclick = () => {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//Add a "checked" symbol when cliking on a list item



