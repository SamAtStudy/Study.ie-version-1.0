<?php
/**
 * Created by PhpStorm.
 * User: Aaron.S
 * Date: 09/04/2019
 * Time: 20:01
 */
include_once 'sqlConnectUsers.php';

if(!$connectUser){
    echo "<h1>Failed to connect to MySQL: Error" . mysqli_connect_errno() . "</h1>";
}

$username='';
$password='';
$userResults='';
$userResultHistory='';

if(isset($_POST['username'])){
    $username=$_POST['username'];
}

if(isset($_POST['password'])){
    $password=$_POST['password'];
}

$sql = "SELECT user_results FROM users WHERE user_name='".$username."' LIMIT 1";
$result = mysqli_query($connectUser, $sql);

if(empty($username) || empty($password)){
    echo "empty params";
    exit();
}else if(mysqli_num_rows($result) == 1){
    echo "already exists";
    exit();
}else{
    $sql="INSERT INTO users (user_name,user_pass) VALUES ('$username','$password');";
    //$sql="INSERT INTO users (user_name,user_pass,user_results,user_result_history) VALUES ('$username','$password','userResults','userResultHistory');";
    mysqli_query($connectUser,$sql);
    echo "created";
    exit();
    //header("Location: ./index.php?login=success");
}
