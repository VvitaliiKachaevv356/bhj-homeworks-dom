const tasksInput = document.getElementById("task__input");
const tasksAddButton = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");
function taskAdd(e) {
  if (tasksInput.value.trim()) {
    e.preventDefault();
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
tasksAddButton.addEventListener("click", taskAdd);
tasksInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    taskAdd(e);
  }
});
tasksList.addEventListener("click", (e) => {
  if (e.target.classList.contains("task__remove")) {
    e.target.closest(".task").remove();
  }
});
