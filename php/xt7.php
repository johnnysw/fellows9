<?php
    session_start();
    $result = [];
    if(isset($_SESSION['user'])){
        $result = $_SESSION['user'];
    }
    if(isset($_POST['submit'])){
        $arr = [];
        $name = $_POST['name'];
        $age = $_POST['age'];
        $arr[] = $name;
        $arr[] = $age;
        $result[] = $arr;
        $_SESSION['user'] = $result;
    }

    if(isset($_POST['del'])){
        array_pop($result);
        $_SESSION['user'] = $result;
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
        名称:<input type="text" name="name"><br>
        年龄:<input type="text" name="age"><br>
        <input type="submit" name="submit">
    <table>
        <tr>
            <td>编号</td>
            <td>姓名</td>
            <td>年龄</td>
        </tr>
        <?php
        foreach ($result as $key => $row){
            echo "<tr>";
            echo "<td>".($key+1)."</td>";
            echo "<td>$row[0]</td>";
            echo "<td>$row[1]</td>";
            echo "</tr>";
        }
        ?>
    </table>
        <input type="submit" name="del" value="删除">
    </form>
</body>
</html>
