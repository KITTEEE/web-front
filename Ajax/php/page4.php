<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>php 基础语法 $get</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css">
    <script src="main.js"></script>
    <script>
        /* 
            http协议的常用请求方式：对应增删改查
            get 用来从服务器获取数据(参数一般作为查询条件)
            post 用来向服务器提交数据
            put 用来修改数据
            delete 用来删除数据
        */
    </script>
</head>
<body>
    <div>测试get获取数据</div>
    <div>
        <?php 
        
        /* 
            http://localhost/php/page4.php?flage=1
             $_GET['flage'];得到了url中传递的参数
        */
            $f = $_GET['flage'];//$_GET得到了url中传递的参数
            // echo $f; 
            if($f == 1) {
                echo '得到数据';
            }else{
                echo '参数错误';
            }
        ?>
    </div>
</body>
</html>