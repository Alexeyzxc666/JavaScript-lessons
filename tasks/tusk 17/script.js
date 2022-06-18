//Даны ссылки. По загрузке страницы, если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;)

const a = document.querySelectorAll('a')

for (let i = 0; i < a.length; i++) {
    if(a[i].href.indexOf('http://') == 0){
        console.log(a[i].href)
        a[i].innerHTML = a[i].innerHTML + `&rarr;`
    }else{
        console.log('hi')
    }
    
}
