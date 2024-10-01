document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');
    listItem.textContent = taskValue;

    listItem.addEventListener('click', () => {
        listItem.classList.toggle('completed');
    });

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove');
    removeButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);
    taskInput.value = ""; // Clear the input field
}