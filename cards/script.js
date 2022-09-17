let clack = 0;

$('.card').click(function(){
    if(clack == 0){
        $(this).each(function(index, value){
        $(this).html(`Ваш промокод: ${getRandomInt(10000000)}<br/>Скидка 7%`)
    })
    }
    clack++;
})

$('.card').click(function(){
    if(clack == 2){
    $('.head-text').html('<h4 style="color:red ;">Вы уже выбрали карточку!</h4>')
}
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
