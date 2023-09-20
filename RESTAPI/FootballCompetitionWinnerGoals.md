**Objective**: Implement a JavaScript program that calculates the total number of goals scored by the winning team of a football competition in a given year using a REST API.

**Task Description**:

You are given a task to retrieve information about football competitions and matches from a REST API. The API allows querying competitions by name and year, and it also allows querying matches by competition, year, and team. Your goal is to create a JavaScript function that calculates the total number of goals scored by the team that won a specific competition in a given year.

**Function Signature**:

```javascript
function getWinnerTotalGoals(competition, year) {
  // Your code here
  // Your code here
}
```

**Input**:

- `competition` (string): The name of the football competition.
- `year` (number): The year for which you want to calculate the total goals.

**Output**:

- An integer representing the total number of goals scored by the winning team of the specified competition in the specified year.

**API Endpoints**:

To access competition and match data, you can use the following API endpoints:

- Get information about a competition by name and year:

  ```
  https://jsonmock.hackerrank.com/api/football_competitions?name=<name>&year=<year>
  ```

- Get matches played by a specific team in a competition, year, and page:

  ```
  https://jsonmock.hackerrank.com/api/football_matches?competition=<competition>&year=<year>&team1=<team>&page=<page>
  ```
  
  ```
  https://jsonmock.hackerrank.com/api/football_matches?competition=<competition>&year=<year>&team2=<team>&page=<page>
  ```

**API Response**:

The response to the competition API request will be a JSON object with the following structure:

```json
{
  "page": 1,
  "per_page": 10,
  "total": 1,
  "total_pages": 1,
  "data": [
    {
      "name": "Competition Name",
      "country": "Country Name",
      "year": 2014,
      "winner": "Winning Team Name",
      "runnerup": "Runner-up Team Name"
    }
  ]
}
```

Each match object contains information about the competition, including the name of the winning team (`winner`).

The response to the match API request will be a JSON object with match data as described earlier.

**Example**:

```javascript
const totalGoals = getWinnerTotalGoals("UEFA Champions League", 2011);
console.log(totalGoals); // Output: 28
```

In this example, calling `getWinnerTotalGoals("UEFA Champions League", 2011)` should return the total number of goals scored by the winning team of the "UEFA Champions League" in the year 2011.

**Note**:

- You need to make API requests to retrieve competition and match data and calculate the total goals scored by the winning team of the specified competition in the specified year.
- You may need to make multiple API requests to retrieve all the pages of match data if there are more than one page.
- Please ensure that you handle API requests and responses appropriately in your JavaScript function.
