const menu_toggle = document.querySelector('.menu-toggle');
const list = document.querySelector('nav ul')

menu_toggle.addEventListener('click',() =>{
    list.classList.toggle('slide');
});

const cards = document.querySelector(".services")

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle("serv-animation", entry.isIntersecting)
    })
}, {
    threshold: 0.5,
})
observer.observe(cards)

