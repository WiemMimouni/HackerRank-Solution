**Challenge Description:**
A company needs to contact its customers regarding policy changes. They have international customers but lack country codes in their database. There are two tables in the database: `customers` and `country_codes`. The `customers` table contains details of every customer, including `customer_id`, `name`, `phone_number`, and `country`. The `country_codes` table contains the country code for every country.

Write an SQL query to retrieve a list of all customer IDs, names, and phone numbers with their country codes concatenated with their phone numbers. Sort the output in ascending order of their `customer_id`.

**Tables:**

1. `customers` Table:
   - `customer_id` (INTEGER): The unique customer ID (Primary Key).
   - `name` (STRING): The name of the customer (1 to 20 characters).
   - `phone_number` (STRING): The phone number of the customer (6 to 13 characters).
   - `country` (STRING): The country of the customer (Foreign Key referencing `country_codes`).

2. `country_codes` Table:
   - `country` (STRING): The name of the country (Primary Key).
   - `country_code` (STRING): The country code for the country.

**Sample Data Tables:**

- `customers` Table:

  ```
  | customer_id | name   | phone_number | country |
  |-------------|--------|--------------|---------|
  | 1           | Raghav | 951341341    | India   |
  | 2           | Jake   | 52341351     | USA     |
  | 3           | Alice  | 61341351     | USA     |
  ```

- `country_codes` Table:

  ```
  | country | country_code |
  |---------|--------------|
  | USA     | 1            |
  | India   | 91           |
  ```

**Sample Output:**

```
| customer_id | name   | formatted_phone |
|-------------|--------|-----------------|
| 1           | Raghav | +91951341341    |
| 2           | Jake   | +152341351      |
| 3           | Alice  | +161341351      |
```

**Explanation:**

- Raghav is from India, so the country code is 91, and the complete phone number is +91951341341.
- Jake is from the USA, so the country code is 1, and the complete phone number is +152341351.
- Alice is also from the USA, so the country code is 1, and the complete phone number is +161341351.

The query retrieves customer IDs, names, and formatted phone numbers with country codes and sorts them by customer ID.
