SELECT s.sid, s.name, d.dept_name
FROM Student s
CROSS JOIN Department d;

SELECT s.sid, s.name, d.dept_name
FROM Student s
JOIN Department d
ON s.dept_id = d.dept_id;
