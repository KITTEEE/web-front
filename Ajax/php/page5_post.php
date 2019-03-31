<?php 
    //这里根据表单中的name属性获取值
    $username = $_POST['username'];
    $pw = $_POST['password'];
    //设置服务器相应的文件类型
    header("Content-Type:text/html;charset=utf-8");
    if($username == 'admin' && $pw == '123'){
        echo '登录成功';
    }else{
        echo '用户名密码错误';
    }
?>