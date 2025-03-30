import {
  saveThemeToLocalStorage,
  loadThemeFromLocalStorage,
} from './local-storage-api';

import { refs } from './refs';
const savedTheme = loadThemeFromLocalStorage();
const { body, changeThemeBtn } = refs;

if (savedTheme) {
  body.classList.remove('theme-dark', 'theme-light');
  body.classList.add(savedTheme);
} else {
  body.classList.add('theme-dark');
}

changeThemeBtn.addEventListener('click', changeTheme);

function changeTheme() {
  if (body.classList.contains('theme-light')) {
    body.classList.remove('theme-light');
    body.classList.add('theme-dark');
    saveThemeToLocalStorage('theme-dark');
  } else {
    body.classList.remove('theme-dark');
    body.classList.add('theme-light');
    saveThemeToLocalStorage('theme-light');
  }
}
