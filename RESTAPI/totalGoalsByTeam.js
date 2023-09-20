const axios = require("axios");

async function getTotalGoals(team, year) {
  let totalGoals = 0;
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const response1 = await axios.get(
      `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team}&page=${page}`
    );
    const response2 = await axios.get(
      `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team2=${team}&page=${page}`
    );

    totalPages = Math.max(
      response1.data.total_pages,
      response2.data.total_pages
    );

    response1.data.data.forEach((match) => {
      totalGoals += parseInt(match.team1goals, 10);
    });

    response2.data.data.forEach((match) => {
      totalGoals += parseInt(match.team2goals, 10);
    });

    page++;
  }

  return totalGoals;
}

