<?php
include 'Server.php';
header("Access-Control-Allow-Origin: *");


if(!$connectDB){
    echo "Failed to connect to MySQL: Error" . mysqli_connect_error();
}

if(isset($_POST['courseID'])) {
    retrieveCourse();
}

if(isset($_POST['tiles']) && isset($_POST['numRows'])) {
    retrieveTiles();
}
if(isset($_POST['email'])){
Updatemail();
}


function retrieveTiles(){
    //$tiles=$_POST['tiles'];
    //echo $tiles;

    //$numRows=$_POST['numRows'];
    //echo $numRows;


    include 'Server.php';
    $tiles=$_POST['tiles'];
    $numRows=$_POST['numRows'];
    $numRows=$numRows-7;


    $sql = "SELECT * FROM coursedata LIMIT ".$numRows.",".$tiles;
    $result = mysqli_query($connectDB, $sql);

    $resultAr= array();
    while ( $row = $result->fetch_assoc()){
        $resultAr[]=$row;
    }

    //Debugging array
    //print_r($resultAr);

    //header("Location: ./index.php?bookInfo=success");
    echo json_encode($resultAr,JSON_UNESCAPED_UNICODE);
}

function retrieveCourse(){
    include 'Server.php';
    $courseID=$_POST['courseID'];

    $sql = "SELECT * FROM coursedata WHERE courseID=".$courseID;
    //$sql = "SELECT * FROM courseData WHERE courseID=19";
    $result = mysqli_query($connectDB, $sql);

    $resultAr= array();
    while ( $row = $result->fetch_assoc())  {
        $resultAr[]=$row;
    }

    //Debugging array
    //print_r($resultAr);

    //header("Location: ./index.php?bookInfo=success");
    echo json_encode($resultAr,JSON_UNESCAPED_UNICODE);
}
function Updatemail(){
    include 'Server.php';
    $email = $_POST['email'];
    $sql = "INSERT INTO `mlistdata`(`email`) VALUES ('$email')";
    if(mysqli_query($connectDB, $sql)) {

    }
    else{
        echo mysqli_error($connectDB);
    }
    }


