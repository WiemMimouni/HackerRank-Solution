**Problem Statement:**
An institutional broker wants to identify customers who account for at least 5% of the total number of trades. Given a list of trades by customer name, determine which customers meet this criteria and return them in alphabetical order.

**Function Signature:**

```javascript
function mostActive(customers) => Array<string>
```

**Input:**

- `customers` (Array of strings): An array of customer names. (1 ≤ n ≤ 10^5, 1 ≤ length of customers[i] < 20)

**Output:**

- Returns an alphabetically ascending array of customer names who account for at least 5% of the total trades.

**Constraints:**

- The first character of each customer name is a capital English letter.
- All characters of each customer name except for the first one are lowercase English letters.
- It is guaranteed that at least one customer makes at least 5% of the trades.

**Implementation:**

1. Create an empty object `customerCounts` to store the counts of each customer.
2. Calculate the total number of trades as `totalTrades` by getting the length of the `customers` array.
3. Iterate through the `customers` array and count the number of trades for each customer, storing the counts in `customerCounts`.
4. Create an empty array `result` to store the customer names that meet the criteria (at least 5% of the total trades).
5. Iterate through `customerCounts` and check if the count for each customer is at least 5% of `totalTrades`.
6. If a customer meets the criteria, add their name to the `result` array.
7. Sort the `result` array alphabetically.
8. Return the `result` array as the final output.

**Example:**

```javascript
const customers = ["Bigcorp", "Bigcorp", "Acme", "Bigcorp", "Zork", "Zork", "Abc", "Bigcorp", "Acme", "Bigcorp", "Bigcorp", "Zork", "Bigcorp", "Zork", "Zork", "Bigcorp", "Acme", "Bigcorp", "Acme", "Bigcorp", "Acme", "Littlecorp", "Nadircorp"];
const result = mostActive(customers);
console.log(result); // Output: ["Acme", "Bigcorp", "Zork"]
```

This function identifies customers who account for at least 5% of the total trades and returns their names in alphabetical order.
