const form = document.querySelector("form");
const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

let todos = [];

function addToDo() {
  console.log("Add-Button Clicked!");

  const todoText = todoInput.value;

  if (todoText.length > 0) {
    const todo = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };

    todos.push(todo);
    todoInput.value = "";
    console.log(
      "New-todo-name :",
      todo.text,
      "| ID :",
      todo.id,
      "| Status",
      todo.completed
    );

    renderTodo();
  }
}

function deleteTodo(id) {
  console.log("Delete-Button Clicked!");

  todos = todos.filter((todo) => todo.id != id);

  console.log("Deleted-todo-name :", todos);

  renderTodo();
}

function toggleCompleted(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
    console.log("Todo", id, "Update! |", todo.completed);
    return todo;
  });

  renderTodo();
}

function renderTodo() {
  console.log("ToDoList Update!");
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    const todoText = document.createElement("span");
    const deleteButton = document.createElement("button");

    todoText.textContent = todo.text;
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => deleteTodo(todo.id));
    todoText.addEventListener("click", () => toggleCompleted(todo.id));

    if (todo.completed) {
      todoItem.classList.add("completed");
    }

    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  addToDo();
});

renderTodo();
