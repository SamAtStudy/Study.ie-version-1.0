<?php
/**
 * Created by PhpStorm.
 * User: Aaron
 * Date: 17/06/2019
 * Time: 16:13
 */

include_once 'dbConnection.php';

if(isset($_POST['option'])){
    $option=$_POST['option'];

    if($option=='login'){
        login();
    }else if($option=='create'){
        create();
    }
}

function create(){
    include_once 'dbConnection.php';

    $name=$_POST['userName'];
    $email=$_POST['userEmail'];
    $pass=$_POST['userPass'];
    $conPass=$_POST['userConPass'];

    if(empty($name)||empty($email)||empty($pass)||empty($conPass)){
        echo ("empty");
        //header("Location: /?signUpBad");
        //exit();
    }
}

function login(){
    include_once 'dbConnection.php';
}