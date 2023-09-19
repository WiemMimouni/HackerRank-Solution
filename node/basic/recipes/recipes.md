**Objective**: Create an Express app for fetching paginated recipes using API responses.

**Routes**:

- **GET /recipes**: This route fetches all paginated recipes.

**Query Parameters**:

- `page` (optional): The page of the resource to be fetched. Defaults to 1.
- `limit` (optional): The number of items to be returned in a single page. Defaults to 3.

**Examples**:

1. **GET /recipes**:
   - Description: A GET request to retrieve all recipes.
   - Response:

     ```json
     [
       { "id": 1, "name": "Crock Pot Roast" },
       { "id": 2, "name": "Roasted Asparagus" },
       { "id": 3, "name": "Curried Lentils and Rice" },
       // Add more recipes as needed
     ]
     ```

2. **GET /recipes?page=1&limit=2**:
   - Description: A GET request to retrieve the first page of recipes with a limit of 2 recipes per page.
   - Response:

     ```json
     [
       { "id": 1, "name": "Crock Pot Roast" },
       { "id": 2, "name": "Roasted Asparagus" }
     ]
     ```

3. **GET /recipes?page=2&limit=3**:
   - Description: A GET request to retrieve the second page of recipes with a limit of 3 recipes per page.
   - Response:

     ```json
     [
       { "id": 4, "name": "Big Night Pizza" },
       { "id": 5, "name": "Cranberry and Apple Stuffed Acorn Squash Recipe" },
       { "id": 6, "name": "Mic's Yorkshire Puds" }
     ]
     ```
