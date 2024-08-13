const menu_toggle = document.querySelector('.menu-toggle');
const list = document.querySelector('nav ul')

menu_toggle.addEventListener('click',() =>{
    list.classList.toggle('slide');
});

const cards = document.querySelectorAll(".service")

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle("serv-animation", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
}, {
    threshold: 0.5,
})

cards.forEach(card=>{
    observer.observe(card)
})
