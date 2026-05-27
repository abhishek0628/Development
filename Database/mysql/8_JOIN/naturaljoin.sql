SELECT *
FROM Student
NATURAL JOIN Department;

-- automatically becomes
-- cross join +condistion
SELECT *
FROM Student
JOIN Department
ON Student.sid = Department.sid;
