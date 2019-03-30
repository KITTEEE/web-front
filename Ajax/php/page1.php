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
        var arr = [123,456];
        console.log(arr[0]);
        console.log(arr[1]);
        var arr1 = new Array(789,111);
        console.log(arr1[0]);
        console.log(arr1[1]);

        //二维数组
        var arr = [];
        arr[0] = [1,2,3];
        arr[1] = [4,5,6];
        arr[2] = [7,8,9];
        console.dir(arr);

    </script>
</head>
<body>
    <div>测试内容 初识数组</div>
    <?php 
        //一维数组：
        // $arr = array("hello","hi");
        // print_r($arr);//Array ( [0] => hello [1] => hi )
        // echo "<br/>";
        // echo $arr[0];
        // echo "<br/>";
        // echo $arr[1];
        // echo "<br/>";

        // $arr1 = array("username"=>"zhangsan","age"=>"12","sex"=>"man");
        // print_r($arr1);//Array ( [username] => zhangsan [age] => 12 [sex] => man )
        // echo $arr1['username'];
        // echo "<br/>";
        
        // var_dump($arr1);
        // ------------------------------------
        //二维数组
        $arr = array();
        $arr[0] = array(11,22,33);
        $arr[1] = array(44,55,66);
        $arr[2] = array(77,88,99);
        print_r($arr);
        // Array ( 
        // [0] => Array ( [0] => 11 [1] => 22 [2] => 33 )
        // [1] => Array ( [0] => 44 [1] => 55 [2] => 66 )
        // [2] => Array ( [0] => 77 [1] => 88 [2] => 99 ) )
        echo '<br/>';
        $arr1 = array(123,456);
        $arr1['apple'] = array('color'=>123,'shape'=>true);
        $arr1['orange'] = array('color'=>'orange','shape'=>'round');
        $arr1['banana'] = array('color'=>'yellow','shape'=>'long');
        print_r($arr1);
        // Array ( 
        // [0] => 123
        // [1] => 456
        // [apple] => Array ( [color] => 123 [shape] => 1 )
        // [orange] => Array ( [color] => orange [shape] => round )
        // [banana] => Array ( [color] => yellow [shape] => long ) )

    ?>

</body>
</html>