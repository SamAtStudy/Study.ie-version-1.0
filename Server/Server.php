<?php
//header("Access-Control-Allow-Origin: *");
/*$dbServername = "mysql4205int.cp.blacknight.com";
$dbUsername = "u1459480_study";
$dbPassword = "hT6RFxgd";

// Create connection
$dbName='db1459480_SamAJ';

$connectDB=mysqli_connect($dbServername,$dbUsername,$dbPassword,$dbName);

//Set mysqli charset as UTF-8
mysqli_set_charset($connectDB,"utf8");*/


$dbServername = "localhost";
$dbUsername = "root";
$dbPassword = "Studypand24a";
$dbName = "CoursesDB";

$connectDB=mysqli_connect($dbServername,$dbUsername,$dbPassword,$dbName);

//Set mysqli charset as UTF-8
mysqli_set_charset($connectDB,"utf8");