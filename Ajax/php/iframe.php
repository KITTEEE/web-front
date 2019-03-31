<?php
    $username = $_POST['username'];
    $pw = $_POST['password'];
    // if ($username == 'admin' && $pw == '123') {
    //     echo '登录成功';
    // }
    if ($username == 'admin' && $pw == '123') {
?>
    <script>
        parent.document.getElementById('info').innerHTML = '登陆成功';
    </script>
<?php }else{ ?>
    <script>
        parent.document.getElementById('info').innerHTML = '登陆失败';
    </script>
<?php } ?>