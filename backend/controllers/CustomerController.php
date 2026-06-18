<?php

require_once "../models/Customer.php";

class CustomerController
{
    private Customer $customer;

    public function __construct(mysqli $db)
    {
        $this->customer = new Customer($db);
    }

    public function createCustomer(?array $data): array
    {
        if (!$data) {
            return [
                "success" => false,
                "message" => "No data received"
            ];
        }

        $customer_name = $data['customer_name'] ?? '';
        $nic = $data['nic'] ?? '';
        $mobile = $data['mobile'] ?? '';
        $email = $data['email'] ?? '';
        $address = $data['address'] ?? '';

        $result = $this->customer->create(
            $customer_name,
            $nic,
            $mobile,
            $email,
            $address
        );

        if ($result) {
            return [
                "success" => true,
                "message" => "Customer Added Successfully"
            ];
        }

        return [
            "success" => false,
            "message" => "Failed to Add Customer"
        ];
    }
}