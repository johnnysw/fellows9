<?php

$pdo = new PDO('mysql:host=localhost;dbname=test','root','');
$sql = "select * from t_user";
$result = $pdo->query($sql);


//
//$conn = mysql_connect('localhost','root','');
//mysql_select_db('test',$conn);
//
//

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

    <table>
        <tr>
            <td>name</td>
            <td>pwd</td>
            <td>delete</td>
        </tr>
        <?php
            foreach($result as $row){
                echo '<tr>';
                echo "<td>".$row['username']."</td>";
                echo "<td>".$row['password']."</td>";
                echo "<td><a href='userdel.php?id=".$row['id']."'/>删除</td>";
                echo '</tr>';
            }

        ?>

    </table>
</body>
</html>
