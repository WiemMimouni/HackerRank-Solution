SELECT
    c.customer_id,
    c.name,
    CONCAT_WS('', '+', cc.country_code, c.phone_number) AS formatted_phone_number
FROM customers c
JOIN country_codes cc ON c.country = cc.country
ORDER BY c.customer_id;
