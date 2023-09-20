**Challenge Description:**
You are given a table with daily weather data for the last 6 months of 2020, including maximum, minimum, and average temperatures. Write a query that provides the month, monthly maximum temperature, monthly minimum temperature, and monthly average temperature for each of the six months.

**Table:**

- `temperature_records` Table:
  - `record_date` (VARCHAR(10)): Date of the record.
  - `data_type` (VARCHAR(3)): Type key ('min', 'max', or 'avg').
  - `data_value` (INT): Value of the temperature record.

**Sample Data:**

- `temperature_records` Table:

  ```
  | record_date | data_type | data_value |
  |-------------|-----------|------------|
  | 2020-07-01  | max       | 92         |
  | 2020-07-01  | min       | 71         |
  | 2020-07-01  | avg       | 74         |
  | 2020-07-02  | max       | 90         |
  | 2020-07-02  | min       | 67         |
  | 2020-07-02  | avg       | 77         |
  | ...         | ...       | ...        |
  ```

**Expected Output:**

```
| month | max  | min  | avg  |
|-------|------|------|------|
| 7     | 100  | 67   | 79   |
| ...   | ...  | ...  | ...  |
```

In the output, you should have the month, monthly maximum temperature (max), monthly minimum temperature (min), and monthly average temperature (avg) for each of the six months.
