//Даны N абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.

const p = document.querySelectorAll('p')

p.forEach(p=>{
    p.addEventListener('click', ()=>{
        x = p.textContent * p.textContent
        p.textContent = x
    })
})

