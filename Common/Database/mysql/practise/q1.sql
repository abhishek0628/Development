-- Find top 2 salaries in each department using window functions only.
SELECT dept_id, name, salary
FROM (
    SELECT dept_id, name, salary,
           DENSE_RANK() OVER (
               PARTITION BY dept_id 
               ORDER BY salary DESC
           ) AS rnk
    FROM employee
) t
WHERE rnk <= 2;