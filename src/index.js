// const formRef = document.querySelector(".js-feedback-form");
// const areaRef = document.querySelector(".js-feedback-form textarea");

// formRef.addEventListener('submit', handleFormsubmit);
// areaRef.addEventListener('input', handleTextareaInput);

// handleText();

// function handleFormsubmit(event) {
//     event.preventDefault();
//     localStorage.removeItem('comment');
//     event.currentTarget.reset();
// };

// function handleTextareaInput(event) {
//     const value = event.currentTarget.value;
//     localStorage.setItem('comment', value)
// }

// function handleText() {
//     const value = localStorage.getItem("comment")
//     if (value) {
//         areaRef.textContent = value;
//     }
// }
import menuItemTpl from "./tamples/menu-item.hbs";
import dishes from "./js/dishes.json";

const menuRef = document.querySelector('.js-menu');
const themeSwitchRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body')
  
const markup = menuItemTpl(dishes);

menuRef.insertAdjacentHTML('beforeend', markup);

themeSwitchRef.addEventListener('change', hendleThemeSwith);

themeCheck()

function hendleThemeSwith() {
    bodyRef.classList.toggle('dark-theme');
    if (themeSwitchRef.checked) {
        localStorage.setItem("theme", "dark")
    } else {
        localStorage.removeItem("theme")
        
    };
};

function themeCheck() {
    const theme = localStorage.getItem("theme")
    if (theme) {
        bodyRef.classList.add('dark-theme');
        themeSwitchRef.checked = true;
    }
    
}