SELECT
    u.id AS user_id,
    u.first_name AS user_first_name,
    u.last_name AS user_last_name,
    c.id AS customer_id,
    c.customer_name AS customer_name,
    COUNT(co.id) AS number_of_contacts
FROM user_account u
JOIN contact co ON u.id = co.user_account_id
JOIN customer c ON co.customer_id = c.id
GROUP BY u.id, u.first_name, u.last_name, c.id, c.customer_name
HAVING COUNT(co.id) > 1
ORDER BY u.id ASC;
