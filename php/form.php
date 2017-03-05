<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        span{
            color: red;
        }
    </style>
</head>
<body>

<form action="welcome.php" method="post">
    Name: <input type="text" name="name">
    <?php
        if(isset($_GET['xx'])){
           echo "<span>name输入不正确</span>";
        }

    ?>
<!--    <span>name输入不正确</span>-->
    <br>
    E-mail: <input type="text" name="email">
    <?php
    if(isset($_GET['yy'])){
        echo "<span>email输入不正确</span>";
    }

    ?>
<!--    <span>email输入不正确</span>-->
    <br>
    <input type="submit" value="登录">

</form>

</body>
</html>