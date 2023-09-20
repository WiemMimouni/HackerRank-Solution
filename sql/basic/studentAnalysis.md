**Challenge Description:**
A school recently conducted its annual examination and wants to identify academically low-performing students to organize extra classes for them. You need to write an SQL query to return the roll numbers and names of students who have a total of less than 100 marks in all three subjects.

**Tables:**

1. `student_information` Table:
   - `roll_number` (INTEGER): The roll number of the student (Primary Key).
   - `name` (STRING): The name of the student.

2. `examination_marks` Table:
   - `roll_number` (INTEGER): The roll number of the student (Primary Key).
   - `subject_one` (INTEGER): The marks of the student in the first subject.
   - `subject_two` (INTEGER): The marks of the student in the second subject.
   - `subject_three` (INTEGER): The marks of the student in the third subject.

**Sample Data Tables:**

- `student_information` Table:

  ```
  | roll_number | name       |
  |-------------|------------|
  | 1           | Sheila     |
  | 2           | Rachel     |
  | 3           | Christopher|
  ```

- `examination_marks` Table:

  ```
  | roll_number | subject_one | subject_two | subject_three |
  |-------------|-------------|-------------|---------------|
  | 1           | 32          | 48          | 64            |
  | 2           | 24          | 21          | 25            |
  | 3           | 55          | 12          | 10            |
  ```

**Sample Output:**

```
| roll_number | name       |
|-------------|------------|
| 2           | Rachel     |
| 3           | Christopher|
```

**Explanation:**

- We calculate the total marks for each student by summing their marks in all three subjects.
- The cumulative marks for students with roll numbers 1, 2, and 3 are 144, 70, and 77, respectively.
- Since students 2 and 3 have a total of less than 100 marks, their names and roll numbers are displayed in the output.

Please let me know if you need any further explanation or assistance with this challenge.
