<?php
/**
 * Created by PhpStorm.
 * User: Aaron.S
 * Date: 09/04/2019
 * Time: 21:30
 */
include_once 'dbConnection.php';
//use require instead?

if(!$connectUser){
    echo "<h1>Failed to connect to MySQL: Error" . mysqli_connect_errno() . "</h1>";
}

$username='';
$password='';

if(isset($_POST['username'])){
    $username=$_POST['username'];
}

if(isset($_POST['password'])){
    $password=$_POST['password'];
}

if(empty($username) || empty($password)){
    echo "empty params";
    exit();
}else{
    $sql="SELECT * FROM users WHERE user_name='".$username."'AND user_pass='".$password."' LIMIT 1";
    $result=mysqli_query($connectUser,$sql);

    if(mysqli_num_rows($result)==1){
        echo "login success";
        exit();
    }else{
        echo "incorrect password";
        exit();
    }
}