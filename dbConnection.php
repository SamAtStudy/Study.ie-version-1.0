<?php

$dbServername='db1459480_SamAJ';
$dbUsername='u1459480_study';
$dbPassword='hT6RFxgd';
$dbName='logindata';

$dbCon=mysqli_connect($dbServername,$dbUsername,$dbPassword,$dbName);

if(!$dbCon){
    die("Connection failed: ".mysqli_connect_error());
}