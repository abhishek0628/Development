-- unique but not primary key
CREATE TABLE User (
    email VARCHAR(100) UNIQUE
);
ALTER TABLE students
ADD CONSTRAINT uq_email UNIQUE (email);