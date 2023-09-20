**Challenge Description:**
As part of business expansion efforts at a company, you are tasked with finding a list of customers and agents who have been in contact more than once. For each such interaction, display the user ID, first name, and last name of the user, and the customer ID, name, and the number of times they have been in contact. Order the result by user ID in ascending order.

**Tables:**

1. `customer` Table:
   - `id` (INT): The unique customer ID (Primary Key).
   - `customer_name` (VARCHAR(255)): The name of the customer.
   - `city_id` (INT): A unique ID for the city in which the customer resides.
   - `customer_address` (VARCHAR(255)): The customer's address.
   - `contact_person` (VARCHAR(255)): The person of contact (can be null).
   - `email` (VARCHAR(128)): Email address of the customer.
   - `phone` (VARCHAR(128)): Phone number for the customer.
   - `is_active` (INT): Boolean to denote if the customer is active (1 for active, 0 for inactive).

2. `user_account` Table:
   - `id` (INT): The unique user account ID (Primary Key).
   - `first_name` (VARCHAR(64)): The first name of the user.
   - `last_name` (VARCHAR(64)): The last name of the user.
   - `user_name` (VARCHAR(128)): User name for the user.
   - `password` (VARCHAR(255)): Password of the account.
   - `email` (VARCHAR(128)): Email address of the user.
   - `phone` (VARCHAR(128)): Contact number for the user (can be null).
   - `is_active` (INT): Boolean to denote if the user account is active (1 for active, 0 for inactive).

3. `contact` Table:
   - `id` (INT): The unique contact ID (Primary Key).
   - `user_account_id` (INT): Foreign key referencing `user_account.id`.
   - `customer_id` (INT): Foreign key referencing `customer.id`.
   - `contact_type_id` (INT): Type of the contact.
   - `contact_outcome_id` (INT): Can be null.
   - `additional_comment` (VARCHAR(255)): Additional comment (can be null).
   - `initiated_by_customer` (INT): Boolean.
   - `initiated_by_user` (INT): Boolean.

**Sample Data Tables:**

- `customer` Table:

  ```
  | id | customer_name          | city_id | customer_address      | contact_person    | email                   | phone      | is_active |
  |----|------------------------|---------|-----------------------|-------------------|-------------------------|------------|-----------|
  | 1  | Drogerie Wien          | 1       | Deckergasse 15A       | Emil Steinbach    | emil@drogeriewien.com   | 094234234  | 1         |
  | 2  | Cosmetics Store        | 1       | Watling Street 347    | Jeremy Corbyn     | jeremy@c-store.org     | 093923923  | 1         |
  | 3  | Kosmetikstudio         | 1       | Rothenbaumchaussee 53 | Willy Brandt      | willy@kosmetikstudio.com | 0941562222 | 1         |
  | 4  | Neue Kosmetik          | 1       | Karlsplatz 2          | NULL              | info@neuekosmetik.com  | 094109253  | 0         |
  | 5  | Bio Kosmetik           | 2       | Motzstraße 23         | Clara Zetkin      | clara@biokosmetik.org  | 093825825  | 1         |
  | 6  | K-Wien                 | 1       | Kärntner Straße 204   | Maria Rauch-Kallat | maria@kwien.org        | 093427002  | 1         |
  | 7  | Natural Cosmetics      | 4       | Clerkenwell Road 14B) | Glenda Jackson     | glena.j@natural-cosmetics.com | 093555123 | 1 |
  | 8  | Kosmetik Plus          | 2       | Unter den Linden 1    | Angela Merkel     | angela@k-plus.com     | 094727727  | 1         |
  | 9  | New Line Cosmetics     | 4       | Devonshire Street 92  | Oliver Cromwell   | oliver@nic.org        | 093202404  | 0         |
  ```

- `user_account` Table:

  ```
  | id | first_name | last_name | user_name  | password                            | email                | phone      | is_active |
  |----|------------|-----------|------------|------------------------------------|----------------------|------------|-----------|
  | 1  | Jürgen     | Klopp     | jklopp     | d0406ee29d848474a1897058df4634ad   | jklopp@gmail.com     | 0933336777 | 1         |
  | 2  | José       | Mourinho  | jmourinho  | 64bd7f38bef780050096bfb872084ac7   | jmourinho@gmail.com  | 093825125  | NULL      |
  | 3  | Josep      | Guardiola | jpuardiola | 98a87d2631b766915c9d1bf584c3fd7b   | jpuardiola@gmail.com | NULL       | 0         |
  | 4  | Alex       | Ferguson  | aferguson  | bda97a3a31b44206e6bc3d5f40f6023e   | aferguson@gmail.com  | 093925645  | 1         |
  ```

- `contact` Table:

  ```
  | id | user_account_id | customer_id | contact_type_id | contact_outcome_id | additional_comment     | initiated_by_customer | initiated_by_user |
  |----|-----------------|-------------|-----------------|---------------------|-------------------------|-----------------------|-------------------|
  | 1  | 4               | 7           | 1               | 0                   | customer agreed to our offer | 0                     | 1                 |
  | 2  | 1               | 2           | 2               | 0                   | don't want our products    | 0                     | 1                 |
  | 3  | 2               | 9           | 3               | 0                   | interested in our offer   | 0                     |
