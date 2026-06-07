-- primary key unique inside in table like username in instagram
CREATE TABLE Employee (
    emp_id INT PRIMARY KEY not null,
    name VARCHAR(50)
);

-- add primary key
alter table tablename
add constraint pk_tablename primary key(columnname);
-- example
alter table students
add constraint pk_students primary key(roll)

-- drop primary key'
alter table tablename
drop primary key
-- example
alter table students
drop primary key
