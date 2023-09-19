function getMinCost(crewld, jobld) {
  crewld.sort((a, b) => a - b);
  crewld.sort((a, b) => a - b);
  jobld.sort((a, b) => a - b);

  let totalDistance = 0;
  for (let i = 0; i < crewld.length; i++) {
    totalDistance += Math.abs(crewld[i] - jobld[i]);
  }

  return totalDistance;
}
