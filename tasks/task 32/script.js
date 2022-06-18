//Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот.

const p = document.querySelector('#p')



function func(){
    setTimeout(()=>{
        p.classList.remove('green')
        p.classList.add('red')
        
    },1000)
    setTimeout(()=>{
        p.classList.remove('red')
        p.classList.add('yellow')
        
    },2000)
    setTimeout(()=>{
        p.classList.remove('yellow')
        p.classList.add('green')
        
    },3000)
}
func()
setInterval(func,3000)