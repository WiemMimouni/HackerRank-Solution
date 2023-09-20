def numCells(grid):
    n = len(grid)
    m = len(grid[0])
    
    def is_dominant(i, j):
        value = grid[i][j]
        neighbors = [(i-1, j-1), (i-1, j), (i-1, j+1),
                     (i, j-1),             (i, j+1),
                     (i+1, j-1), (i+1, j), (i+1, j+1)]
        for x, y in neighbors:
            if 0 <= x < n and 0 <= y < m and grid[x][y] >= value:
                return False
        return True
    
    count = 0
    for i in range(n):
        for j in range(m):
            if is_dominant(i, j):
                count += 1
    
    return count


    