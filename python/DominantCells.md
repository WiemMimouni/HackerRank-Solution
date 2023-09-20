**Problem Description:**

You are given a 2-dimensional grid represented as a list of lists of integers. Each cell in the grid has a value. A cell is called dominant if its value is strictly greater than the values of all its neighboring cells. Two cells are considered neighbors if they share a common side or a common corner.

Write a function called `numCells` to count the number of dominant cells in the grid.

**Function Signature:**

```python
def numCells(grid: List[List[int]]) -> int:
    pass
```

**Input:**

- `grid`: A 2-dimensional list of integers, where `grid[i][j]` represents the value of the cell at row `i` and column `j`.
- The dimensions of the grid are `n` rows and `m` columns.
- The value of each cell is an integer.

**Output:**

- Return an integer, the number of dominant cells in the grid.

**Constraints:**

- 1 <= n, m <= 500 (number of rows and columns)
- There are at least 2 cells in the grid.
- 1 <= grid[i][j] <= 100 (cell values)

**Examples:**

```python
grid = [[1, 2, 7], [4, 5, 6], [8, 8, 9]]
result = numCells(grid)
print(result)  # Output: 2
```

In this example, there are 3 cells that have strictly greater values than all their neighboring cells. The dominant cells are the one at the bottom-right (9) and the one at the top-right (7).
