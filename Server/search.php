<?php
include 'Server.php';
header("Access-Control-Allow-Origin: *");

//get the q parameter from URL
$q = $_GET["q"];

$hint = "";
//$hint=$q;
$resultNum = 0;
//lookup all links from the xml file if length of q>0
if (strlen($q) > 2) {

    $sql = "SELECT courseID,courseTitle,courseProvider FROM coursedata WHERE courseTitle LIKE '%".$q."%' OR courseProvider LIKE '%".$q."%' LIMIT 6";
    $result = mysqli_query($connectDB, $sql);

    $resultAr= array();
    while ( $row = $result->fetch_assoc()){
        //$resultAr[]=$row;
        if ($hint=="") {
            $hint="<a href='https://www.study.ie/course.php?id=" .
                $row['courseID'] .
                "' target='_blank'>" .
                $row['courseTitle'] . " (" . $row['courseProvider'] . ")" . "</a>";
            $resultNum++;
        } else {
            $hint=$hint . "<br /><a href='https://www.study.ie/course.php?id=" .
                $row['courseID'] .
                "' target='_blank'>" .
                $row['courseTitle'] . " (" . $row['courseProvider'] . ")" . "</a>";
            $resultNum++;
        }
    }

    //Debugging array
    //print_r($resultAr);

    //header("Location: ./index.php?bookInfo=success");
    //echo json_encode($resultAr,JSON_UNESCAPED_UNICODE);
    //$hint=json_encode($resultAr,JSON_UNESCAPED_UNICODE);
}

// Set output to "no suggestion" if no hint was found
// or to the correct values
if ($hint == "") {
    $response = "No Suggestions";
} else {
    /*$hint=$hint . "<br /><a href='https://www.study.ie/courseResults.php?q=" .
        $q .
        "' target='_blank'>" . "Show More" ."</a>"; */
    $response = $hint;
}

//output the response
echo $response;