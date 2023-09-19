function renameFile(newName, oldName) {
  const MOD = 1000000007;
  const n = newName.length;
  const m = oldName.length;

  const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    dp[0][i] = 1;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (newName[i - 1] === oldName[j - 1]) {
        dp[i][j] = (dp[i - 1][j - 1] + dp[i][j - 1]) % MOD;
      } else {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }

  return dp[n][m];
}
