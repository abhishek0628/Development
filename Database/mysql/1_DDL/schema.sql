-- show schema
show create table tablename;

-- show full schema
describe tablename;

select *from 
INFORMATION_SCHEMA.COLUMNS
where TABLE_NAME="students"AND
TABLE_SCHEMA="school"