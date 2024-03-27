-- create databases
CREATE DATABASE IF NOT EXISTS `main`;

-- create root user and grant rights
CREATE USER 'root'@'localhost' IDENTIFIED BY 'local';
GRANT ALL ON *.* TO 'root'@'localhost';