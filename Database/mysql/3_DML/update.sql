-- UPDATE tablename
-- SET columnname=data;

SET SQL_SAFE_UPDATES=0;--to update the table set
SET SQL_SAFE_UPDATES=1;--again set to 1
UPDATE student
SET age=33
WHERE name='rayn';

-- multiple updates
update students 
set marks=case roll
when 1 then 30
when 2 then 32
when 3 then 33
end
where roll in(1,2,3);