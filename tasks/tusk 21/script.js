//Даны N картинок размера 30px. По нажатию на картинку под ними эта картинка появляется размером в 50px

const imgs = document.querySelectorAll('#res')
const div = document.querySelector('#div')

imgs.forEach(img=>{
    img.addEventListener('click',func)
})

function func(){
    div.innerHTML += `<div><img src="/imgs/Square.png" width='100px' height='100px'></div>`
}