-- LAG(column, offset, default) OVER (ORDER BY ...)
-- column → value you want
-- offset → how many rows back (default = 1)
-- default → value if no previous row exists
SELECT id, name, marks,
       LAG(marks) OVER (ORDER BY id) AS prev_marks
FROM students;

LAG(marks, 2) OVER (ORDER BY id)
LAG(marks, 1, 0) OVER (ORDER BY id)