<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>PHP page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css">
    <script src="main.js"></script>
    <script>
        var num = 123;
        console.log(num);
        //js中字符串拼接用的是 + 
        var str = '编号为' + num;
        console.log(str);
    </script>
</head>
<body>
    <div>Welcome php page</div>
    <?php 
        //php变量声明 变量名由字符/数字/下划线组成 并且不可以以数字开始，变量名对大小写敏感
        //php的字符串拼接符号是 .
        //php中单引号对于其中的变量当作普通的字符串处理
        //php中双引号能够解析变量值
        $num = 1234;
        $NUM = 123;
        echo "<div>编号为$num".'和'.$NUM."</div>";
        //所有php相关代码都要写到这里面
        //echo作用就是向页面当中输入字符串
        echo '<div>Hello world！</div>'
    ?>
</body>
</html>