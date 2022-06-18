// Даны ссылки. По загрузке страницы добавьте в конец каждой ссылки ее href в круглых скобках.

const a = document.querySelectorAll('a')

for (let i = 0; i < a.length; i++) {
    a[i].textContent += `(${a[i].href})`
}

