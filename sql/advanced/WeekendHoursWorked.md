**Challenge Description:**

You are given a table named `attendance` that records the times when employees log in and out over the course of a month. Your task is to determine the number of hours worked during the weekends (Saturday and Sunday) for each employee.

For simplicity, the hours worked are truncated to their integer part.

**Table:**

- `attendance` Table:
  - `timestamp` (VARCHAR(20)): Date and time at which the employee logged in or logged out.
  - `emp_id` (INT): Unique ID of the employee.

**Expected Output:**

Return a list of employee IDs (`emp_id`) and the weekend hours worked, descending by hours worked.

**Example:**

For the given data, the output should be:

```
| emp_id | work_hours |
|--------|------------|
| 747    | 67         |
| ...    | ...        |
```

In the output, you should have the employee ID (`emp_id`) and the number of weekend hours worked (`work_hours`) for each employee, sorted in descending order by hours worked.
