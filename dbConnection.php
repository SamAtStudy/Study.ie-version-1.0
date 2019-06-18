<?php

$serverName='localhost';
$dbUsername='root';
$dbPassword='';
$dbName='test';

$dbCon=mysqli_connect($serverName,$dbUsername,$dbPassword,$dbName);

if(!$dbCon){
    die("Connection failed: ".mysqli_connect_error());
}