<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json");

// Handle CORS preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once "../config/db.php";
require_once "../controllers/CustomerController.php";
global $conn;
// Read JSON body
$json = file_get_contents("php://input");



$data = json_decode($json, true);

// Check JSON validity
if (json_last_error() !== JSON_ERROR_NONE) {
    echo json_encode([
        "success" => false,
        "message" => "Invalid JSON received",
        "error" => json_last_error_msg()
    ]);
    exit;
}

// Check empty request
if (!$data) {
    echo json_encode([
        "success" => false,
        "message" => "No data received"
    ]);
    exit;
}

try {

    $controller = new CustomerController($conn);

    $result = $controller->createCustomer($data);

    echo json_encode($result);

} catch (Exception $e) {

    echo json_encode([
        "success" => false,
        "message" => $e->getMessage()
    ]);
}