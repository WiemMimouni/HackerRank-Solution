SELECT
    EXTRACT(MONTH FROM STR_TO_DATE(record_date, '%Y-%m-%d')) AS month,
    MAX(CASE WHEN data_type = 'max' THEN CAST(data_value AS UNSIGNED) END) AS max_temp,
    MIN(CASE WHEN data_type = 'min' THEN CAST(data_value AS UNSIGNED) END) AS min_temp,
    ROUND(AVG(CASE WHEN data_type = 'avg' THEN CAST(data_value AS UNSIGNED) END)) AS avg_temp
FROM temperature_records
GROUP BY month
ORDER BY month;
