CREATE DATABASE ai_solution_db;

USE ai_solution_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
);

-- Insert a sample user (password should be hashed in a real application)
INSERT INTO users (username, password) VALUES ('admin', 'admin123');