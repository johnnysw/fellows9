<?php
/**
 * Created by PhpStorm.
 * User: apple
 * Date: 16/12/23
 * Time: 下午2:18
 */

$name = $_POST['name'];
$email = $_POST['email'];

//echo $name,$email;
$err = '';
if($name == ''){
    $err .= "xx=1&";
}

if($email == ''){
   $err .= "yy=1";
}

if($err==''){
    header("location:success.php");
}else{
    header("location:form.php?$err");
}



