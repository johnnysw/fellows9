<?php
/**
 * Created by PhpStorm.
 * User: apple
 * Date: 16/12/26
 * Time: 上午10:09
 */
    $arr = [];
    do{
        $a = mt_rand(0,9);
        $arr[] = $a;
        $arr = array_unique($arr);
    }while(count($arr) != 5);

    foreach ($arr as $value){
        echo $value." ";
    }

