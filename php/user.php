<?php
/**
 * Created by PhpStorm.
 * User: apple
 * Date: 16/12/23
 * Time: 下午3:48
 */

$name = $_POST['name'];
$pwd = $_POST['pwd'];

//$conn = mysql_connect('localhost','root','');
//mysql_select_db('test',$conn);

$pdo = new PDO('mysql:host=localhost;dbname=test','root','');

$sql = "insert into t_user(username,password) values('$name','$pwd')";

//delete from t_user where id = ?;

$res = $pdo->exec($sql);

if($res >= 1){
    header("location:user_list.php");
}

//mysql_query($sql);
//if(mysql_affected_rows() >= 1){
//
//}













