**Challenge Description:**
Given the product and invoice details for products at an online store, you need to find all the products that were not sold. For each such product, display its SKU and product name. Order the result by SKU in ascending order.

**Tables:**

1. `PRODUCT` Table:
   - `id` (INT): The unique product ID (Primary Key).
   - `sku` (VARCHAR(32)): The SKU (Stock Keeping Unit) of the product.
   - `product_name` (VARCHAR(128)): The name of the product.
   - `product_description` (VARCHAR(255)): The description of the product.
   - `current_price` (DECIMAL(8,2)): The current price of the product.
   - `quantity_in_stock` (DECIMAL(8,2)): The quantity of the product in stock.
   - `is_active` (INT): Indicates whether the product is active (1 for active, 0 for inactive).

2. `INVOICE_ITEM` Table:
   - `id` (INT): The unique invoice item ID (Primary Key).
   - `invoice_id` (INT): The invoice ID (Foreign Key referencing some other table).
   - `product_id` (INT): The product ID (Foreign Key referencing `PRODUCT` table).
   - `quantity` (DECIMAL(8,2)): The quantity of the product in the invoice.
   - `price` (DECIMAL(8,2)): The price per unit of the product in the invoice.
   - `line_total_price` (DECIMAL(8,2)): The total price for the line item in the invoice.

**Sample Data Tables:**

- `PRODUCT` Table:

  ```
  | sku     | product_name                  | product_description                      | current_price | quantity_in_stock | is_active |
  |---------|-------------------------------|------------------------------------------|---------------|-------------------|-----------|
  | 330120  | Game Of Thrones - URBAN DECAY | Game Of Thrones Eyeshadow Palette        | 65.00         | 122.00            | 1         |
  | 330121  | Advanced Night Repair - ESTÉE LAUDER | Advanced Night Repair Synchronized Recovery Complex II | 98.00 | 51.00 | 1 |
  | 330122  | Rose Deep Hydration - FRESH   | Rose Deep Hydration Facial Toner          | 45.00         | 34.00             | 1         |
  | 330123  | Pore-Perfecting Moisturizer - TATCHA | Pore-Perfecting Moisturizer & Cleanser Duo | 25.00 | 393.00 | 74 |
  | 330124  | Capture Youth-DIOR            | Capture Youth Serum Collection             | 95.00         | 1.00              | 1         |
  | 330125  | Slice of Glow-GLOW RECIPE     | Slice of Glow Set                         | 68.00         | 154.00            | 1         |
  | 330126  | Healthy Skin-KIEHL'S SINCE 1851 | Healthy Skin Squad                        | 80.00         | 0.00              | 1         |
  | 330127  | Power Pair!-IT COSMETICS      | IT's Your Skincare Power Pair! Best-Selling Moisturizer & Eye Cream Duo | 20.00 | 281.00 | 1 |
  | 330128  | Dewy Skin Mist - TATCHA       | Limited Edition Dewy Skin Mist Mini       | 170.00        | 0.00              | 1         |
  | 330129  | Silk Pillowcase-SLIP          | Silk Pillowcase Duo + Scrunchies Kit      | 10.00         | 1.00              | 1         |
  ```

- `INVOICE_ITEM` Table:

  ```
  | invoice_id | product_id | quantity | price | line_total_price |
  |------------|------------|----------|-------|------------------|
  | 1          | 20         | 65.00    | 1300.00 | 20,600.00       |
  | 1          | 7          | 2.00     | 68.00  | 136.00          |
  | 1          | 5          | 10.00    | 100.00 | 1,000.00        |
  | 3          | 10         | 2.00     | 180.00 | 360.00          |
  | 4          | 1          | 5.00     | 65.00  | 325.00          |
  | 4          | 2          | 10.00    | 95.00  | 950.00          |
  | 4          | 5          | 4.00     | 100.00 | 400.00          |
  | 5          | 10
