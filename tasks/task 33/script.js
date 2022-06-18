//Дан абзац. Дан массив цветов ['red', 'green', 'blue']. Сделайте так, чтобы каждую секунду абзац менял свой цвет на определенное значение их массива: сначала 'red', потом 'green' и так далее. Как только цвета в массиве закончатся - все начнется сначала. Количество цветов в массиве может быть любым

const p = document.querySelector('#p')

// let mass = ['red', 'green', 'blue'];
// let random;


// const colors = () =>{
//     setInterval(()=>{
//         random = mass[Math.floor(Math.random()* mass.length)]
//         console.log(random)
//         if(random == 'red'){
//             p.classList.add('red')
//             p.classList.remove('blue')
//             p.classList.remove('green')
//         }
//         if(random == 'green'){
//             p.classList.add('green')
//             p.classList.remove('red')
//             p.classList.remove('blue')
//         }
//         if(random == 'blue'){
//             p.classList.add('blue')
//             p.classList.remove('green')
//             p.classList.remove('red')
//         }
//     },1000)
// }

// colors()

//or

let color = ['red', 'green', 'blue'];
let i = 0

function func(){
    p.classList.add(color[i])
    i++;
    if(i >= color.length){
        i = 0;
    }
}
setInterval(func, 1000)




