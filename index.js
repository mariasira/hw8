const enteredTask = document.querySelector('#newTask');
const addButton = document.querySelector('#addButton');
const tasks = document.querySelector('.js-tasks');
const firstLi = document.querySelector('.js-firstLi');

function onRemoveFirstLi() {
    firstLi.hidden = true;
}
addButton.addEventListener("click", onRemoveFirstLi);

const getNewTaskItem = function(taskName) {
    const listItem = document.createElement("li");
    const label = document.createElement("label");
    label.innerText = taskName ;
    listItem.appendChild(label);
    return listItem;
}

const onAddTask = function () {
   
    const listItem = getNewTaskItem(enteredTask.value);
    tasks.appendChild(listItem);
    enteredTask.value = "";
}

addButton.addEventListener("click", onAddTask);