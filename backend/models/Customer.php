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
            home_address
        )
        VALUES
        (
            ?,
            ?,
            ?,
            ?,
            ?
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
}