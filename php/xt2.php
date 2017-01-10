<?php
    $arr = array('02-11'=>'外地出差','03-15'=>'打假');
    $result = "";
    if(isset($_POST['submit'])){
        $date = $_POST['date'];
        if(isset($arr[$date])){
            $result = $arr[$date];
        }else{
            $result = "查询不到结果";
        }
        echo "<script>alert('".$result."')</script>";
    }

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<form action="" method="post">
    你要查询的日期:<input type="text" name="date"><br>
    <input type="submit" name='submit' value="查询">
    <input type="reset" value="重置">
</form>
</body>
</html>
