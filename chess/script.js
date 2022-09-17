let map;
let square = '<div id="s$coord" class="square $color"></div>';
let divFigure = '<div id="f$coord" class="figure">$figure</div>';
var isDragging = false; // переменная для перемещения фигур перед перезагрузкой фигур(читая с сервера)
$(function () {
    start();
    setInterval('showFiguresPHP()', 3000)
});

function start() {
    map = new Array(64)
    addSquares();
    showFiguresPHP();
}

function setDraggable() {
    $('.figure').draggable({
        start: function(event,ui) {
            isDragging = true;
        }
    });
};

function setDroppable() {
    $('.square').droppable({
        drop: function (event, ui) {
            let frCoord = ui.draggable.attr('id').substring(1); //substring убирает 'f' у '#f0', то есть получается id 0
            let toCoord = this.id.substring(1); // У event берем id и substring так же убирает букву.
            moveFigures(frCoord, toCoord);
            moveFiguresPHP(frCoord, toCoord);
            isDragging = false;
        }
    });
};

function moveFigures(frCoord, toCoord) {
    console.log('move from ' + frCoord + ' to ' + toCoord);// показывает в консоли откуда и куда идет фигура
    figure = map[frCoord]
    showFigure(frCoord, '1')
    showFigure(toCoord, figure)
}

function addSquares() {
    $('.board').html('');

    for (let coord = 0; coord < 64; coord++)
        $('.board').append(square.replace('$coord', coord).replace('$color', colorFunct(coord) ? 'black' : 'white'));
    setDroppable();
};

function showFigures(figures) {
    for (let coord = 0; coord < 64; coord++)
        showFigure(coord, figures.charAt(coord));

};

function showFigure(coord, figure) {
    if (map[coord] == figure) return // функция не вызывает себя постоянно(по 64 раза)
    map[coord] = figure;
    $('#s' + coord).html(divFigure.replace('$coord', coord).replace('$figure', getChessSymbol(figure)));
    setDraggable();
};



function getChessSymbol(figure) {
    switch (figure) {
        case 'K': return '&#9812;';
        case 'Q': return '&#9813;';
        case 'R': return '&#9814;';
        case 'B': return '&#9815;';
        case 'N': return '&#9816;';
        case 'P': return '&#9817;';
        case 'k': return '&#9818;';
        case 'q': return '&#9819;';
        case 'r': return '&#9820;';
        case 'b': return '&#9821;';
        case 'n': return '&#9822;';
        case 'p': return '&#9823;';
        default: return '';
    };
};

function colorFunct(coord) {
    return (coord % 8 + Math.floor(coord / 8)) % 2;
};

function moveFiguresPHP(frCoord,toCoord) {
    $.get('server.php?moveFigures' +
        '&frCoord' + frCoord +
        '$toCoord' + toCoord,
        showFigures
    );
}

function showFiguresPHP() {
    if(isDragging) return
    $.get('server.php?getFigures', showFigures)
}