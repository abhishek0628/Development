CREATE TABLE Product (
    price INT CHECK (price > 0)
);

ALTER TABLE students
ADD CONSTRAINT chk_age CHECK (age > 0);