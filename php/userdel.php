<?php
/**
 * Created by PhpStorm.
 * User: apple
 * Date: 16/12/23
 * Time: 下午3:48
 */

$id = $_GET['id'];


//$conn = mysql_connect('localhost','root','');
//mysql_select_db('test',$conn);

//require_once bd.php;

$pdo = new PDO('mysql:host=localhost;dbname=test','root','');

$sql = "delete from t_user where id = $id";

//update t_user set username='li' where id=?;

//delete from t_user where id = ?;

$res = $pdo->exec($sql);

if($res >= 1){
    header("location:user_list.php");
}

//mysql_query($sql);
//if(mysql_affected_rows() >= 1){
//
//}













