//Дан инпут. Выделите любой текст на странице. По окончанию выделения этот текст должен записаться в этот инпут.

const inpt = document.querySelector('#res')
const p = document.querySelector('#p')

document.documentElement.addEventListener('mousemove',func)

function func(){
        var x = window.getSelection();
        inpt.value = x
}