const LS_KEY = 'theme';

export function saveThemeToLocalStorage(theme) {
  localStorage.setItem(LS_KEY, theme);
}

export function loadThemeFromLocalStorage() {
  const savedTheme = localStorage.getItem(LS_KEY);
  return savedTheme ? savedTheme : 'theme-dark';
}

const LS_KEYTASKS = 'tasks';

export function saveTasksToLocalStorage(tasks) {
  localStorage.setItem(LS_KEYTASKS, JSON.stringify(tasks));
}

export function getTasksFromLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem(LS_KEYTASKS));
  
  return tasks || []; 
}

export function deleteTaskFromLocalStorage(taskId) {
  const tasks = getTasksFromLocalStorage();

  const newTasks = tasks.filter(task => task.id !== taskId);

  saveTasksToLocalStorage(newTasks);
  console.log(newTasks);
  
}
