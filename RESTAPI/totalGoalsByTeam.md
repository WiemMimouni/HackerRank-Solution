**Objective**: Implement a JavaScript program that calculates the total number of goals scored by a given football team in a given year using a REST API.

**Task Description**:

You are given a task to retrieve information about football matches from a REST API. The API allows querying matches by teams and year. Your goal is to create a JavaScript function that calculates the total number of goals scored by a given team in a given year.

**Function Signature**:

```javascript
function getTotalGoals(team, year) {
  // Your code here
}
```

**Input**:

- `team` (string): The name of the football team.
- `year` (number): The year for which you want to calculate the total goals.

**Output**:

- An integer representing the total number of goals scored by the given team in the specified year.

**API Endpoint**:

To access the football matches data, you can use the following API endpoints:

- Get matches where the team was the home team:

  ```
  https://jsonmock.hackerrank.com/api/football_matches?year=<year>&team1=<team>&page=<page>
  ```

- Get matches where the team was the visiting team:

  ```
  https://jsonmock.hackerrank.com/api/football_matches?year=<year>&team2=<team>&page=<page>
  ```

**API Response**:

The response to the API request will be a JSON object with the following structure:

```json
{
  "page": 1,
  "per_page": 10,
  "total": 24,
  "total_pages": 3,
  "data": [
    {
      "team1": "TeamA",
      "team2": "TeamB",
      "team1goals": "2",
      "team2goals": "1"
    },
    {
      "team1": "TeamC",
      "team2": "TeamA",
      "team1goals": "0",
      "team2goals": "3"
    },
    // More match objects...
  ]
}
```

Each match object contains the names of two teams (`team1` and `team2`) and the number of goals scored by each team (`team1goals` and `team2goals`).

**Example**:

```javascript
const totalGoals = getTotalGoals("Barcelona", 2011);
console.log(totalGoals); // Output: 35
```

In this example, calling `getTotalGoals("Barcelona", 2011)` should return the total number of goals scored by the team "Barcelona" in the year 2011.

**Note**:

- You need to retrieve matches where the specified team was either the home team (`team1`) or the visiting team (`team2`) and calculate the total goals scored by that team in those matches.
- You may need to make multiple API requests to retrieve all the pages of match data if there are more than one page.
- Please ensure that you handle API requests and responses appropriately in your JavaScript function.
