const enteredTask = document.querySelector('#newTask');
const addButton = document.querySelector('#addButton');
const tasks = document.querySelector('.js-tasks');

const newTask = function(createNewTask ) {
    const listItem = document.createElement("li");
    const label = document.createElement("label");
    label.innerText = createNewTask ;
    listItem.appendChild(label);
    return listItem;
}

const addTask = function () {
    if (enteredTask.value == "") {
        alert("No task to do, enter a task");
        return;
    }
    const listItem = newTask(enteredTask.value);
    tasks.appendChild(listItem);
    enteredTask.value = "";
}

addButton.addEventListener("click", addTask);