<?php
/**
 * Created by PhpStorm.
 * User: apple
 * Date: 16/12/23
 * Time: 下午1:41
 */
class Obj{
    private $name;
    private $age;
    protected $sex;
    static $num=0;
    //构造
    function __construct($name,$age,$sex){
        $this->name = $name;
        $this->age = $age;
        $this->sex = $sex;
    }
    //析构
    function __destruct()
    {
        echo $this->name;
        echo "this is destruct";
    }

    function setName($name){
        $this->name = $name;
    }

    function getName(){
        return $this->age;
    }
}




class Obj1 extends Obj{



}


$obj1 = new Obj1('ww',12,2);

echo $obj1->getName();






