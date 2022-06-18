//Дан абзац. Дан массив строк ['один', 'два', 'три']. Под абзацем ссылка 'следующая строка'. По заходу на страницу в абзаце должен стоять нулевой элемент этого массива, а по нажатию на ссылку - вставлятся следующий элемент.

const p = document.querySelector('#p')
const a = document.querySelector('#a')

let mass = ['один', 'два', 'три'];
let i = 0;
function start(){
p.innerHTML = mass[i]
i++;
}

function func(e){   
    p.innerHTML = mass[i];
    i++;
    console.log(i)
    if(i >= mass.length){
        i = 0;
    }
    event.preventDefault()
    
}

