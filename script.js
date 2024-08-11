const menu_toggle = document.querySelector('.menu-toggle');
const list = document.querySelector('nav ul')

menu_toggle.addEventListener('click',() =>{
    list.classList.toggle('slide');
});