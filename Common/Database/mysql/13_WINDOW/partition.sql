-- Ranking within each department
SELECT name, dept, marks,
       RANK() OVER (PARTITION BY dept ORDER BY marks DESC) AS dept_rank
FROM students;