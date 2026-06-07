-- base table/refeerenced table
create table Customer(
    customer_id int primary key,
    customer_name varchar(20) not null,
    age int 
);

-- derived table/referencing table
CREATE TABLE Orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id)
);

alter table childtablename
add constraint fk_childtablename_parenttablename
foreign key(columnname) references parebttablename(columnname)

-- example
alter table courses
add constraint fk_courses_students
foreign key(roll) references students(roll)

ALTER TABLE courses
DROP FOREIGN KEY fk_courses_students;
