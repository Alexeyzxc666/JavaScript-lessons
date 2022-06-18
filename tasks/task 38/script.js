//Спросите у пользователя какой язык (html, css, js, php) он знает с помощью радио кнопочек. Выведите этот язык в абзац.

const inpt = document.querySelectorAll('input');
const p = document.querySelector('#p');

inpt.forEach(data=>{
    data.addEventListener('click',function(){
        p.innerHTML = 'Вы указали ' + data.value
    })
})