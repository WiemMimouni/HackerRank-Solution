SELECT p.sku, p.product_name
FROM PRODUCT p
LEFT JOIN INVOICE_ITEM i ON p.id = i.product_id
WHERE i.product_id IS NULL
ORDER BY p.sku;
