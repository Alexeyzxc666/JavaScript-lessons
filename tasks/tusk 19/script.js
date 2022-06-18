//Даны картинки. По нажатию на любую картинку увеличьте ее в 2 раза. (color = window.getComputedStyle(element).backgroundColor;)

const imgs = document.querySelectorAll('img')

let x;
let y;
imgs.forEach(img=>{
    img.addEventListener('click',()=>{
        x = window.getComputedStyle(img).width.split('px')
        img.style.width = x[0]*2+'px'
        y = window.getComputedStyle(img).height.split('px')
        img.style.height = y[0]*2+'px'
    })
})
