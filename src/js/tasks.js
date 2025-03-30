import { refs } from './refs';
import { renderTask, renderTasks } from './render-tasks';
import {
  saveTasksToLocalStorage,
  getTasksFromLocalStorage,
  deleteTaskFromLocalStorage,
} from './local-storage-api';
import { nanoid } from 'nanoid';

const { form, taskList } = refs;

const tasks = getTasksFromLocalStorage();
renderTasks(tasks);

console.log(tasks);


form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const title = event.currentTarget.elements.taskName.value.trim();
  const description = event.currentTarget.elements.taskDescription.value.trim();

  if (!title && !description) {
    alert('Будь ласка, заповніть всі поля.');
    return;
  }

  if (!title) {
    alert('Будь ласка, напишіть назву завдання.');
    return;
  }

  if (!description) {
    alert('Будь ласка, опишіть ваше завдання.');
    return;
  }

  const newTask = { title, description, id: nanoid() };

  console.log(newTask);

  tasks.push(newTask);
  saveTasksToLocalStorage(tasks);

  renderTask(newTask);

  form.reset();
}

taskList.addEventListener('click', handleDelete);

function handleDelete(event) {
  if (event.target.classList.contains('task-list-item-btn')) {
    const parentDeleteBtn = event.target.closest('.task-list-item');

    if (parentDeleteBtn) {
      const idTask = parentDeleteBtn.dataset.id;
      deleteTaskFromLocalStorage(idTask);

      parentDeleteBtn.remove();
    }
  }
}
