/*function compareStrings(string1, string2) {
    // Inicializa a variável `result`
    let result = `Existe valores iguais nas strings`;
  
    // Itera sobre a string 1
    for (let i = 0; i < string1.length; i++) {
        let print = string2.indexOf(string1[i])
        console.log(i,string1[i], string2[print])
      // Verifica se o caractere está presente na string 2
      if (string2.indexOf(string1[i]) === -1) {
        
        // O caractere não está presente na string 2
        result = `Valores diferentes ou não-iguais`;
        break;
      }
    }
  
    // Retorna o resultado
    return result;
  }
  
  // Exemplo de uso
  let string1 = "iu ri";
  let string2 = "aaaaaaaaa iui"
  
  let result = compareStrings(string1, string2);
  
  console.log(result); // true
  */

  function compareStrings(string1, string2) {
  // Inicializa a matriz `distance`
  let distance = new Array(string2.length + 1).fill(0);

  // Itera sobre a string 1
  for (let i = 0; i <= string1.length; i++) {
    // Itera sobre a string 2
    for (let j = 0; j <= string2.length; j++) {
      // Se os caracteres forem iguais
      if (string1[i - 1] === string2[j - 1]) {
        // A distância é igual à distância anterior
        distance[j] = distance[j - 1];
      } else {
        // A distância é a menor das três
        distance[j] = Math.min(
          distance[j - 1] + 1,
          distance[j] + 1,
          distance[j - 1] + string1.length - i
        );
      }
    }
  }

  // Retorna o valor da matriz `distance` na última posição
  return distance[string2.length];
}

// Exemplo de uso
let string1 = "teste";
let string2 = "aaaaaaaaa teste";

let result = compareStrings(string1, string2);

console.log(result); // 10
