CREATE TABLE customers (
    id INT AUTO_INCREMENT PRIMARY KEY,

    customer_name VARCHAR(100) NOT NULL,
    nic VARCHAR(20) NOT NULL,
    mobile VARCHAR(20) NOT NULL,
    email VARCHAR(100),

    home_address TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);