console.time("Execution Time")
function levenshteinDistance(str1, str2) {
    const m = str1.length;
    const n = str2.length;
  
    // Crie uma matriz para armazenar os resultados intermediários
    const dp = [];
    for (let i = 0; i <= m; i++) {
      dp.push([]);
      for (let j = 0; j <= n; j++) {
        if (i === 0) {
          dp[i][j] = j;
        } else if (j === 0) {
          dp[i][j] = i;
        } else if (str1[i - 1] === str2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
        }
      }
    }
  
    return dp[m][n];
  }
  
  function compareStrings(string1, string2, threshold) {
    const distance = levenshteinDistance(string1, string2);
  
    if (distance <= threshold) {
      return `Strings são semelhantes (distância de Levenshtein: ${distance})`;
    } else {
      return `Strings são diferentes (distância de Levenshtein: ${distance})`;
    }
  }
  
  // Exemplo de uso
  let string1 = "String muito zika";
  let string2 = "String muito ruim";
  let threshold = 7 ; // Ajuste o valor de limite conforme necessário
  
  let result = compareStrings(string1, string2, threshold);
  
  console.log(result);
  console.timeEnd("Execution Time")