SELECT
    emp_id,
    SUM(work_hours) AS weekend_hours_worked
FROM (
    SELECT
        emp_id,
        TIMESTAMPDIFF(HOUR, MIN(timestamp), MAX(timestamp)) AS work_hours
    FROM attendance
    WHERE WEEKDAY(DATE(timestamp)) IN (5, 6) -- Saturday and Sunday (0-indexed)
    GROUP BY emp_id, DATE(timestamp)
) AS weekend_hours
GROUP BY emp_id
ORDER BY weekend_hours_worked DESC;
