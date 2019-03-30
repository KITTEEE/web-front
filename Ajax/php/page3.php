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
        function foo(info){
            // console.log(info);
            return info;
        }
        foo('hello');
    </script>
</head>
<body>
    <?php 
        //php函数名不区分大小写
        //php也有预解析，函数可以先调用后定义
        $ret = foo('hi tom');
        echo $ret;
        function Foo($info){
            return $info;
        }
        //系统函数
        // $arr = array(123,456,789);//[123,456,789]
        $arr = array("a"=>11,"b"=>22,"c"=>33);//{"a":11,"b":22,"c":33}
        $xax = json_encode($arr);
        echo $xax;
    ?>
</body>
</html>