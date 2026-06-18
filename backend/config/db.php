<?php

$host = "localhost";
$user = "root";
$password = "";
$database = "billing_mobile";

$conn = mysqli_connect(
    $host,
    $user,
    $password,
    $database
);

if(!$conn){
    die("Database Connection Failed");
}
?>