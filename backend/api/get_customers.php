<?php

header("Content-Type: application/json");

include("../config/db.php");
global $conn;
$result = mysqli_query(
$conn,
"SELECT * FROM customers ORDER BY id DESC"
);

$customers = [];

while($row = mysqli_fetch_assoc($result))
{
    $customers[] = $row;
}

echo json_encode($customers);