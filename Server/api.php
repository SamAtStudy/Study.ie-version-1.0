<?php
include 'Server.php';

if(!$connectDB){
    echo "Failed to connect to MySQL: Error" . mysqli_connect_errno();
}

if(isset($_POST['courseID'])) {
    retrieve();
}

function retrieve(){
    include 'Server.php';
    $courseID=$_POST['courseID'];

     $sql = "SELECT * FROM coursedata WHERE courseID=".$courseID;
     $result = mysqli_query($connectDB, $sql);

    $resultAr= array();
    while ( $row = $result->fetch_assoc())  {
        $resultAr[]=$row;
    }

    //header("Location: ./index.html?bookInfo=success");
    //echo json_encode($resultAr);
    echo "hello";
}