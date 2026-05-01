SELECT s.sid, s.name, d.dept_name
FROM Student s, Department d
WHERE s.sid = d.sid;