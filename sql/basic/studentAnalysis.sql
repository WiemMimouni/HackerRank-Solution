SELECT si.roll_number, si.name
FROM student_information si
INNER JOIN (
    SELECT em.roll_number, SUM(em.subject_one + em.subject_two + em.subject_three) AS total_marks
    FROM examination_marks em
    GROUP BY em.roll_number
) AS marks_total ON si.roll_number = marks_total.roll_number
WHERE marks_total.total_marks < 100;
