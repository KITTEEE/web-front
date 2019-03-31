<?php 
    $uname = $_POST['username'];
    $pw = $_POST['password'];
    if ($uname == 'admin' && $pw == '123') {
        echo '1';
    }else {
        echo '2';
    }
?>