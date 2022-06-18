//Дан инпут. В него вводится год рождения пользователя. По нажатию на кнопку выведите в абзац ниже сколько пользователю лет.

const btn = document.querySelector('#btn')
const inpt = document.querySelector('#inpt')
const p = document.querySelector('#result')

btn.addEventListener('click', func)

function func(){
    let str = inpt.value;
    let date = new Date()
    let year = date.getFullYear() - str
    p.innerHTML = `Вам уже ${year} лет! (либо исполнится в этом году :))`
}

