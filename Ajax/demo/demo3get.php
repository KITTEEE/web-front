<?php 
    $uname = $_GET['username'];
    $pw = $_GET['password'];
    if ($uname == 'admin' && $pw == '123') {
        echo '1';
    }else {
        echo '2';
    }
?>