DROP DATABASE IF EXISTS bamazon_DB;
-- Create a database called programming_db --
CREATE DATABASE bamazon_DB;

-- Use programming db for the following statements --
USE bamazon_DB;

CREATE TABLE products (
item_id int(11)auto_increment not null,
product_name varchar(20),
department_name varchar(20),
price decimal (11, 2),
stock_quantity int,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone", "Electronics", 450, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dress Shirt", "Clothes", 19, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coffee Mug", "Kitchen", 9.5, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wallet", "Accessories", 29, 11);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple Mouse", "Electronics", 79, 9);



SELECT * FROM products;
