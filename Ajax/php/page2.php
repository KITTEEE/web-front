<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>php 基础语法</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css">
    <script src="main.js"></script>
    <script>
        /* 
        基本类型 ： number string boolean null undefined
        引用类型 ： object (Array Math RegExp Date Object Error Number String Boolean)
     */
        var num = 123;
        console.log(typeof num);
        var flag = true;
        console.log(typeof flag);
        var str = 'hello';
        console.log(typeof str);
        var arr = [];
        console.log(typeof arr);
        console.log(Object.prototype.toString.call(arr));
        console.log(Object.prototype.toString.call({}));
    </script>
</head>

<body>
    <?php 
        // php的数据类型与JavaScript的数据类型是类似的，都是弱类型语言
        // gettype() 内置函数，用来判断变量的类型
        // $num = 123;
        // $float = 1.2;
        // $str = 'hello';
        // $flag = true;
        // $v = null;
        // $arr = array(1,2,3);
        // echo gettype($num);
        // echo '<br>';
        // echo gettype($float);
        // echo '<br>';
        // echo gettype($str);
        // echo '<br>';
        // echo gettype($flag);
        // echo '<br>';
        // echo gettype($v);
        // echo '<br>';
        // echo gettype($arr);
        // echo '<br>';

        // ----------------------------------------
        // count()是内置函数，用来计算数组的长度
        // $arr = array(123,456,789);
        // for($i = 0; $i <= count($arr);$i++){
        //     echo $arr[$i].'<br>';//不可省略分号,这里定义了$i会出现notice建议用foreach
        // }
        // foreach($arr as $value){
        //     echo $value.'-----<br>';
        // }
        $arr = array("username"=>"zhangsan","age"=>"12","sex"=>"man");
        foreach($arr as $key => $value){
            echo $key.'-----'.$value.'<br>';
        }

    ?>
</body>

</html>