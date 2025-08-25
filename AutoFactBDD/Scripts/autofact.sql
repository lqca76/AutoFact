-- Script de création de la base de données

CREATE TABLE departments (
    id VARCHAR(64) PRIMARY KEY,
    label VARCHAR(255) NOT NULL,
    docuware_id VARCHAR(255)
) ENGINE=InnoDB;

CREATE TABLE emails (
    id VARCHAR(64) PRIMARY KEY,
    sender VARCHAR(255) NOT NULL,
    subject VARCHAR(255),
    received_at DATETIME NOT NULL
) ENGINE=InnoDB;

CREATE TABLE suppliers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE invoices (
    id INT AUTO_INCREMENT PRIMARY KEY,
    number VARCHAR(255) NOT NULL,
    received_at DATETIME NOT NULL,
    amount DECIMAL(18,2),
    status INT NOT NULL,  -- Enum C# => stocké en INT
    department_id VARCHAR(64),
    supplier_id INT,
    file_path VARCHAR(500) NOT NULL,
    email_id VARCHAR(64) NOT NULL,

    CONSTRAINT fk_department FOREIGN KEY (department_id)
        REFERENCES departments(id) ON DELETE SET NULL,

    CONSTRAINT fk_supplier FOREIGN KEY (supplier_id)
        REFERENCES suppliers(id) ON DELETE SET NULL,

    CONSTRAINT fk_email FOREIGN KEY (email_id)
        REFERENCES emails(id) ON DELETE CASCADE
) ENGINE=InnoDB;
