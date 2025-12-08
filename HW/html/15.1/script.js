function setDate() {
    const dateElement = document.querySelector('.main-header')
    const now = new Date() 
    const formattedDate = now.toLocaleString("ru-RU", {
        weekday: "long",
        day: "numeric",
        month: "long"
    })
    .replace(/^\w/, c => c.toUpperCase())
    
    dateElement.textContent = formattedDate
}

setDate()



function getToDo() {
  return JSON.parse(localStorage.getItem("todo"));
} //-возврат данних

function createTodo(event) {
  event.preventDefault();

  const startDate = document.querySelector("#startDate").value;
  const description = document.querySelector("#description").value;

  const todo = getToDo();

  const newTodo = {
    id: "todo_" + Math.random().toString(16).slice(2),
    createdAt: new Date(),
    startDate,
    description,
    done: false,
  };

  if (todo && Array.isArray(todo)) {
    todo.push(newTodo);
    localStorage.setItem("todo", JSON.stringify(todo));
  } else {
    localStorage.setItem("todo", JSON.stringify([newTodo]));
  }
  renderTodos();
}
document.querySelector("#create-form").addEventListener("submit", (event) => {
  createTodo(event);
});
function renderTodos() {
  const todo = getToDo();
  if (todo && Array.isArray(todo)) {
    const todolist = document.querySelector("#todolist");
    todolist.innerHTML = "";
    todo.forEach((item) => {
      const startDate = new Date(item.startDate).toLocaleString("ru-RU", {
        day: "numeric",
        month: "long",
        hour: "numeric",
        minute: "numeric",
      });
      const id = item.id;
      todolist.insertAdjacentHTML(
        "beforeend",
        `<li class="todo-block">
      <label class="checkbox" for="${id}" onclick="toggleTodoDone('${id}')">
        <input type="checkbox" name="${id}" id="${id}" ${
          item.done ? "checked" : ""
        } />
        <span class="material-symbols-rounded checkbox__check-icon">
          check
        </span>
      </label>
      <div class="todo-block__data">
        <p class="todo-block__date">${startDate}</p>
        <h3 class="todo-block__title">${item.description}</h3>
      </div>
      <span class="material-symbols-rounded" 
      onclick='deleteTodo("${id}")'>
close
</span>
    </li>`
      );
    });
  }
}
function toggleTodoDone(todoId) {
  const todo = getToDo();
  if (todo && Array.isArray(todo)) {
    const todoIndex = todo.findIndex((item) => {
      return item.id === todoId;
    });

    todo[todoIndex].done = !todo[todoIndex].done;
    localStorage.setItem("todo", JSON.stringify(todo));
  }
  renderTodos();
}

function deleteTodo(todoId) {
  const todo = getToDo();
  if (todo && Array.isArray(todo)) {
    const newToDos = todo.filter((item) => item.id !== todoId);
    localStorage.setItem("todo", JSON.stringify(newToDos));
  }
  renderTodos();
}
renderTodos();
