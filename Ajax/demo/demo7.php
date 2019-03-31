<?php
    // echo '{"username":"zhangsan","age":"12"}';
    // //---------------------------------------
    // $username = 'wangwu';
    // $age = '13';
    // echo '{"username":"'.$username.'","age":"'.$age.'"}';
    //------------------------------------------
    // $arr = array(1,2,3);
    // $arr = array("tome","jerry","spike");
    //一般会把从服务器请求来的数据存入到数组当中
    //然后使用json_encode()将数组转换为字符串再输出到js代码
    $arr = array("name1" => "tom", "name2" => "jerry", "name3" => "sprike");
    $str = json_encode($arr);
    echo $str;
?>