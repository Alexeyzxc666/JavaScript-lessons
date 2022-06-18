//Дана ссылка. Дан чекбокс. По нажатию на ссылку меняйте состояние чекбокса с отмеченного на неотмеченное и наоборот.

$(function(){
    $('a').hide().text('Ссылка').show(2000)
});

const a = document.querySelector('a');
const inpt = document.querySelector('input');

a.addEventListener('click', func)
let x = 0;
function func(){
    inpt.checked = true;
    x++;
    if(x===2){
        inpt.checked = false;
        x=0;
    }

}