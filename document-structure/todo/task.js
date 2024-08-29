const tasksInput = document.getElementById("task__input");
const tasksAddButton = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");
function taskAdd(e) {
  e.preventDefault();
  if (tasksInput.value.trim()) {
    tasksList.insertAdjacentHTML(
      "beforeend",
      `<div class="task">
        <div class="task__title">${tasksInput.value}</div>
        <a href="#" class="task__remove">&times;</a>
      </div>`
    );
    tasksInput.value = "";
  }
}
tasksAddButton.addEventListener("click", (e) => {
  taskAdd(e);
});
tasksList.addEventListener("click", (e) => {
  if (e.target.classList.contains("task__remove")) {
    e.target.closest(".task").remove();
  }
});
