//Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.

const inpt = document.querySelector('#inpt')
const btn = document.querySelector('#btn')

let random = ['7','b','c','d','e','f','g']



btn.addEventListener('click',func)

function func(){
    let str = ''
    for (let i = 0; i < 8; i++) {
        str += random[Math.floor(Math.random()*random.length)]
        inpt.value = str
    }
}