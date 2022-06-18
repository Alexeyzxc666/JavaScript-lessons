//Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.

const inpt = document.querySelector('#inpt')
const p = document.querySelectorAll('p')

let arr = [];

p.forEach(pe=>{
    pe.addEventListener('click',()=>{
        inpt.value = Number(inpt.value) + Number(1)
    })
})

