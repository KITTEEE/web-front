<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>结果页</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css">
    <script src="main.js"></script>
</head>

<body>
    <div>
        <?php 
            //服务器端渲染
            $arr = array();
            $arr['123'] = array("username"=>"zhangsan","chinese"=>90,"math"=>80,"summary"=>170);
            $arr['124'] = array("username"=>"lisi","chinese"=>80,"math"=>80,"summary"=>170);
            $arr['125'] = array("username"=>"wangwu","chinese"=>70,"math"=>80,"summary"=>170);
            $arr['126'] = array("username"=>"zhaoliu","chinese"=>60,"math"=>80,"summary"=>170);

            $code = $_POST['code'];
            
            if($code == 'admin'){
                foreach ($arr as $value) {
                    echo "<ul>
                            <li>姓名：$value[username]</li>
                            <li>语文：$value[chinese]</li>
                            <li>数学：$value[math]</li>
                            <li>总分：$value[summary]</li>    
                        </ul>";
                }
            }else{
                $score = $arr[$code];
                echo "<ul>
                        <li>姓名：$score[username]</li>
                        <li>语文：$score[chinese]</li>
                        <li>数学：$score[math]</li>
                        <li>总分：$score[summary]</li>    
                      </ul>";
            }
        ?>
    </div>
</body>

</html>