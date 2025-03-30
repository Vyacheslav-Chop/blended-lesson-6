import { createTaskMarkUp } from './markup-tasks';
import { refs } from './refs';

const { taskList } = refs;

export function renderTask(task) {
  const { title, description, id } = task;
  const createTask = createTaskMarkUp(title, description, id);
  taskList.insertAdjacentHTML('beforeend', createTask);
}

export function renderTasks(tasks) {
  const markUp = tasks.map(({ title, description, id }) =>
    createTaskMarkUp(title, description, id)
  ).join('');

  taskList.innerHTML = markUp;
}
