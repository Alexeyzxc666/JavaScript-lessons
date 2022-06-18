//Даны картинки. По первому нажатию на любую картинку увеличьте ее в 2 раза. По второму нажатию - уменьшите обратно

const imgs = document.querySelectorAll('img')

let x;
let y;
let t = 0
imgs.forEach(img=>{
    img.addEventListener('click',()=>{
        x = window.getComputedStyle(img).width.split('px')
        y = window.getComputedStyle(img).height.split('px')
        img.style.width = x[0]*2+'px'
        img.style.height = y[0]*2+'px'
        t += 1
        if(t == 2){
            img.style.width = x[0]/2+'px'
            img.style.height = y[0]/2+'px' 
            t = 0
        }
    })
})
