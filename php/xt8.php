<?php
$arr = [];
if(isset($_POST['submit'])){
    $name1 = $_POST['name1'];
    $name2 = $_POST['name2'];
    $name3 = $_POST['name3'];
    $arr[] = $name1;
    $arr[] = $name2;
    $arr[] = $name3;

    $arr = array_unique($arr);
    if(count($arr)!=3){
        echo "<script>alert('分组姓名有重复 请重新输入');</script>";
    }else{
        echo "<script>alert('分组成功');</script>";
    }

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
    分组姓名1<input type="text" name="name1"><br>
    分组姓名2<input type="text" name="name2"><br>
    分组姓名3<input type="text" name="name3"><br>
    <input type="submit" name="submit">
</form>
</body>
</html>
