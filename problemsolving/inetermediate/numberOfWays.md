**Problem Statement:**
There are cities connected by bidirectional roads. The task is to find the number of ways to build exactly 3 hotels in such a way that the distance between every pair of hotels is equal.

**Function Signature:**

```js
function numberOfWays(n, roads) => number
```

**Input:**

- `n` (Integer): The number of cities.
- `roads` (Array of pairs): A 2-dimensional array of integers, where each pair represents a road connecting two cities. Each road is represented as `[city1, city2]`.

**Output:**

- Returns an integer denoting the number of ways to build 3 hotels in such a way that the distance between every pair of hotels is equal.

**Constraints:**

- 4 ≤ n ≤ 50
- 1 ≤ city1, city2 ≤ n
- city1 ≠ city2

**Implementation:**

1. Create an adjacency list to represent the connections between cities using the `roads` array.
2. Initialize a variable `count` to 0 to keep track of the number of valid ways to build hotels.
3. Loop through all possible triples of cities (i, j, k) where i, j, and k are distinct and represent potential hotel locations.
4. For each triple (i, j, k), calculate the minimum distance (minDist) between any pair of hotels using the shortest path algorithm (e.g., Breadth-First Search).
5. Check if the minimum distance (minDist) is greater than 0 and is the same for all pairs (i, j), (i, k), and (j, k). If it is, increment the `count` by 1.
6. After checking all possible triples, return the final value of `count`.

**Example:**

```javascript
const n = 6;
const roads = [
  [1, 2],
  [2, 5],
  [3, 4],
  [4, 5],
  [5, 6],
  [7, 6]
];
const result = numberOfWays(n, roads);
console.log(result); // Output: 2
```

In this example, there are 2 ways to build exactly 3 hotels with equal distances between them, as explained in the problem statement.
