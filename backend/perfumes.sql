CREATE DATABASE perfume_shop;

USE perfume_shop;

CREATE TABLE perfumes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    price DECIMAL(10,2),
    image_url TEXT
);
INSERT INTO perfumes (name, description, price, image_url) VALUES
('HERMES', 'A luxurious fragrance with floral and woody notes.',30000.000,'https://i.postimg.cc/NFFXQWWg/hermes.jpg');