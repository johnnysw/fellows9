<?php
$arr = array('tom'=>123.5,'james'=>99,'mark'=>100);
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    if(array_key_exists($name,$arr)){
        echo "<script>alert('".$name."的成绩为".$arr[$name]."');</script>";
    }else{
        echo "<script>alert('没有".$name."的成绩');</script>";
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
    <input type="text" name="name">
    <input type="submit" name="submit">
</form>
</body>
</html>
