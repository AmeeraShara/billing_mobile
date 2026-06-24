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

        // Extract and sanitize inputs
        $customer_name = trim($data['customer_name'] ?? '');
        $nic = trim($data['nic'] ?? '');
        $mobile = trim($data['mobile'] ?? '');
        $email = trim($data['email'] ?? '');
        $address = trim($data['address'] ?? '');

        // Validation Rules
        $errors = [];

        // 1. Customer Name Validation
        if (empty($customer_name)) {
            $errors[] = "Customer Name is required";
        } elseif (strlen($customer_name) < 2) {
            $errors[] = "Customer Name must be at least 2 characters";
        } elseif (strlen($customer_name) > 100) {
            $errors[] = "Customer Name must not exceed 100 characters";
        } elseif (!preg_match("/^[a-zA-Z\s\-\.']+$/", $customer_name)) {
            $errors[] = "Customer Name contains invalid characters";
        }

        // 2. NIC Validation
        if (empty($nic)) {
            $errors[] = "NIC is required";
        } else {
            // Sri Lanka NIC format: 9 digits + V/X or 12 digits
            $nicPattern = "/^([0-9]{9}[VXvx]|[0-9]{12})$/";
            if (!preg_match($nicPattern, $nic)) {
                $errors[] = "Invalid NIC format. Use 9 digits + V/X or 12 digits";
            }
        }

        // 3. Mobile Number Validation
        if (empty($mobile)) {
            $errors[] = "Mobile Number is required";
        } else {
            // Remove any spaces, dashes, or plus signs
            $mobile = preg_replace('/[\s\-+]/', '', $mobile);
            
            // Sri Lanka mobile format: 07X-XXXXXXX or 94-7X-XXXXXXX
            $mobilePattern = "/^(?:0|94)?[0-9]{9}$/";
            if (!preg_match($mobilePattern, $mobile)) {
                $errors[] = "Invalid mobile number. Use format: 07XXXXXXXXX or 947XXXXXXXX";
            }
            
            // Check if mobile is exactly 10 digits after removing prefix
            $mobileClean = preg_replace('/^(?:94)?0?/', '', $mobile);
            if (strlen($mobileClean) !== 9) {
                $errors[] = "Mobile number must have exactly 9 digits after the prefix";
            }
        }

        // 4. Email Validation (optional but validate if provided)
        if (!empty($email)) {
            if (strlen($email) > 100) {
                $errors[] = "Email must not exceed 100 characters";
            } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $errors[] = "Invalid email format";
            }
            // Check for common disposable email domains (optional)
            $disposableDomains = ['tempmail.com', 'throwaway.com', 'guerrillamail.com'];
            $emailDomain = substr(strrchr($email, "@"), 1);
            if (in_array($emailDomain, $disposableDomains)) {
                $errors[] = "Please use a valid email address";
            }
        }

        // 5. Address Validation (optional but validate if provided)
        if (!empty($address)) {
            if (strlen($address) < 5) {
                $errors[] = "Address must be at least 5 characters";
            } elseif (strlen($address) > 500) {
                $errors[] = "Address must not exceed 500 characters";
            }
        }

        // Return validation errors if any
        if (!empty($errors)) {
            return [
                "success" => false,
                "message" => "Validation failed",
                "errors" => $errors
            ];
        }

        // Check for duplicate NIC
        if ($this->customer->isNicExists($nic)) {
            return [
                "success" => false,
                "message" => "A customer with this NIC already exists"
            ];
        }

        // Check for duplicate Mobile
        if ($this->customer->isMobileExists($mobile)) {
            return [
                "success" => false,
                "message" => "A customer with this mobile number already exists"
            ];
        }

        // Insert customer
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
                "message" => "Customer Added Successfully",
                "data" => [
                    "customer_name" => $customer_name,
                    "nic" => $nic,
                    "mobile" => $mobile
                ]
            ];
        }

        return [
            "success" => false,
            "message" => "Failed to Add Customer"
        ];
    }
}