<?php

class Customer
{
    private mysqli $conn;

    public function __construct(mysqli $db)
    {
        $this->conn = $db;
    }

    public function create(
        string $customer_name,
        string $nic,
        string $mobile,
        string $email,
        string $address
    ): bool {

        $sql = "INSERT INTO customers
        (
            customer_name,
            nic,
            mobile,
            email,
            home_address,
            created_at
        )
        VALUES
        (
            ?,
            ?,
            ?,
            ?,
            ?,
            NOW()
        )";

        $stmt = mysqli_prepare($this->conn, $sql);

        mysqli_stmt_bind_param(
            $stmt,
            "sssss",
            $customer_name,
            $nic,
            $mobile,
            $email,
            $address
        );

        return mysqli_stmt_execute($stmt);
    }

    /**
     * Check if NIC already exists
     */
    public function isNicExists(string $nic): bool
    {
        $sql = "SELECT id FROM customers WHERE nic = ?";
        $stmt = mysqli_prepare($this->conn, $sql);
        mysqli_stmt_bind_param($stmt, "s", $nic);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_store_result($stmt);
        $count = mysqli_stmt_num_rows($stmt);
        mysqli_stmt_close($stmt);
        return $count > 0;
    }

    /**
     * Check if Mobile already exists
     */
    public function isMobileExists(string $mobile): bool
    {
        // Clean mobile number for comparison
        $mobileClean = preg_replace('/[\s\-+]/', '', $mobile);
        $sql = "SELECT id FROM customers WHERE REPLACE(REPLACE(REPLACE(mobile, ' ', ''), '-', ''), '+', '') = ?";
        $stmt = mysqli_prepare($this->conn, $sql);
        mysqli_stmt_bind_param($stmt, "s", $mobileClean);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_store_result($stmt);
        $count = mysqli_stmt_num_rows($stmt);
        mysqli_stmt_close($stmt);
        return $count > 0;
    }

    /**
     * Get customer by NIC
     */
    public function getByNic(string $nic): ?array
    {
        $sql = "SELECT * FROM customers WHERE nic = ?";
        $stmt = mysqli_prepare($this->conn, $sql);
        mysqli_stmt_bind_param($stmt, "s", $nic);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        $customer = mysqli_fetch_assoc($result);
        mysqli_stmt_close($stmt);
        return $customer ?: null;
    }

    /**
     * Get customer by Mobile
     */
    public function getByMobile(string $mobile): ?array
    {
        $mobileClean = preg_replace('/[\s\-+]/', '', $mobile);
        $sql = "SELECT * FROM customers WHERE REPLACE(REPLACE(REPLACE(mobile, ' ', ''), '-', ''), '+', '') = ?";
        $stmt = mysqli_prepare($this->conn, $sql);
        mysqli_stmt_bind_param($stmt, "s", $mobileClean);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        $customer = mysqli_fetch_assoc($result);
        mysqli_stmt_close($stmt);
        return $customer ?: null;
    }
}