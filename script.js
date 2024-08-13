const menu_toggle = document.querySelector('.menu-toggle');
const list = document.querySelector('nav ul')

menu_toggle.addEventListener('click',() =>{
    list.classList.toggle('slide');
});

const card = document.querySelectorAll(".service")

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle("serv-animation")
    })
})

observer.observe(card[0])