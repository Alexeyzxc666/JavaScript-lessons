// Даны N абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.

const btn = document.querySelector('#btn')
const p = document.querySelectorAll('#result')

btn.addEventListener('click', func)

function func(){
    let arr = []
    let str
    for (let i = 0; i < p.length; i++) {
        str = arr.push(p[i])
        arr[i].innerHTML += [i+1]
    }
    console.log(arr)
};