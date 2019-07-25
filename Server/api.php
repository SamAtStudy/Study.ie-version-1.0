<?php
include 'Server.php';
header("Access-Control-Allow-Origin: *");


if(!$connectDB){
    echo "Failed to connect to MySQL: Error" . mysqli_connect_error();
}

if(isset($_POST['courseID'])) {
    retrieve();
}

if(isset($_POST['courseID'])) {
    retrieve();
}

function retrieve(){
    include 'Server.php';
    $courseID=$_POST['courseID'];

    $sql = "SELECT * FROM coursedata WHERE courseID=".$courseID;
    //$sql = "SELECT * FROM coursedata WHERE courseID=19";
    $result = mysqli_query($connectDB, $sql);

    $resultAr= array();
    while ( $row = $result->fetch_assoc())  {
        $resultAr[]=$row;
    }

    //Debugging array
    //print_r($resultAr);

    //header("Location: ./index.html?bookInfo=success");
    echo json_encode($resultAr,JSON_UNESCAPED_UNICODE);
}
