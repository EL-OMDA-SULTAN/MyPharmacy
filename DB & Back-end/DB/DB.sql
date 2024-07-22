CREATE DATABASE PharmacyManagementSystem;
USE PharmacyManagementSystem;

-- Create User table
CREATE TABLE Users (
    User_ID INT AUTO_INCREMENT PRIMARY KEY,
    
    User_Password VARCHAR(255) NOT NULL,
    User_Email VARCHAR(100) NOT NULL,
    User_Type ENUM('SuperAdmin', 'PharmacyAdmin') NOT NULL,
    Pharmacy_ID INT
    
);

-- Create Pharmacy table
CREATE TABLE Pharmacies (
    Pharmacy_ID INT AUTO_INCREMENT PRIMARY KEY,
    Pharmacy_Name VARCHAR(100) NOT NULL,
    Address VARCHAR(255) NOT NULL,
    Phone_Number VARCHAR(50) NOT NULL
);

CREATE TABLE Categories (
    Category_ID INT AUTO_INCREMENT PRIMARY KEY,
    Category_Name VARCHAR(100) NOT NULL,
    Is_deleted INT NOT Null
    
    
);

-- Create Product table
CREATE TABLE Products (
    Product_ID INT AUTO_INCREMENT PRIMARY KEY,
    Pharmacy_ID INT NOT NULL,
    Product_Name VARCHAR(100) NOT NULL,
    Description TEXT,
    Price DECIMAL(10, 2) NOT NULL,
    Expiry_Date DATE
);

-- Create Prescription table
/*CREATE TABLE Prescription (
    Prescription_ID INT AUTO_INCREMENT PRIMARY KEY,
    Pharmacy_ID INT NOT NULL,
    Customer_ID INT NOT NULL,
    Pharmacist_ID INT NOT NULL,
    Prescription_Details TEXT NOT NULL,
    Created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (Pharmacy_ID) REFERENCES Pharmacy(Pharmacy_ID) ON DELETE CASCADE,
    FOREIGN KEY (Customer_ID) REFERENCES Customer(Customer_ID) ON DELETE CASCADE,
    FOREIGN KEY (Pharmacist_ID) REFERENCES User(User_ID) ON DELETE CASCADE
);*/

-- Create Sale table
CREATE TABLE Sales (
    Sale_ID INT AUTO_INCREMENT PRIMARY KEY,
    Pharmacy_ID INT NOT NULL,
    Total_Amount DECIMAL(10, 2) NOT NULL
    );

-- Create Customer table
CREATE TABLE Customers (
    Customer_ID INT AUTO_INCREMENT PRIMARY KEY,
    Customer_Name VARCHAR(100) NOT NULL,
    Customer_Email VARCHAR(100) NOT NULL,
    Customer_Password VARCHAR(100) NOT NULL
);


CREATE TABLE Orders(
	Order_ID Int auto_increment primary key,
    Customer_ID INT not null,
    Product_ID INT not null,
    Order_Status INT not null
);

CREATE TABLE Wishlists (
	Wishlist_ID Int auto_increment primary key,
    Customer_ID INT not null,
    Product_ID INT not null
);







INSERT INTO Users ( User_Password, User_Email, User_Type, Pharmacy_ID) VALUES
( 'password123', 'admin@pharmacy.com', 'SuperAdmin', NULL)

