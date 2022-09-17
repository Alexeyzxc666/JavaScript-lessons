<?php

session_start();
if(strlen($_SESSION['map']) != 64)
    $_SESSION['map'] = '
    rnbqkbnrpppppppp11111111111111111111111111111111PPPPPPPPRNBQKBNR';


if(isset($_GET['getFigures']))
    echo $_SESSION['map'];

if(isset($_GET['moveFigures'])){
    $frCoord = $_GET['frCoord'];
    $toCoord = $_GET['toCoord'];
    $figures = $_SESSION['map'][$frCoord];
    $_SESSION['map'][$frCoord] = '1';
    $_SESSION['map'][$toCoord] = $figures;
    echo $_SESSION['map'];

}
    
