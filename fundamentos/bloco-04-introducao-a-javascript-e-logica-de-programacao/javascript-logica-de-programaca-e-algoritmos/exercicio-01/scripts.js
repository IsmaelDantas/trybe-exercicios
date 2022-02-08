//01 - crie um algoritmo que retorne o fatorial de 10
// console.log('EXERCICIO 1');
// let number = 10;
// let fatorial = 1;

// for (let index = number; index >= 1; index -= 1){
//     fatorial = fatorial * index;
// }

// console.log('o fatorial de: '+number+' é: '+fatorial);

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra.
// Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize 
// a string abaixo como exemplo, depois troque por outras para verificar se
// seu algoritmo está funcionando corretamente.


// console.log('EXERCICIO 2');
// let word = 'tryber';
// let newWord = '';
// for(let i = word.length - 1; i >= 0; i -= 1) {
//     newWord += word[i];
// }
// console.log('A palavra ' + word + ' reversa é: ' + newWord);

//3 - Escreva dois algoritmos: um que retorne a maior palavra deste array e 
//outro que retorne a menor. Considere o número de caracteres de cada palavra.

// console.log('EXERCICIO 3');
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let biggestOfArray = array[0];
// let smallestOfArray = array[0];

// for (let con = 0; con < array.length; con += 1){
//     if (biggestOfArray.length < array[con].length){
//         biggestOfArray = array[con];
//     }
// }

// for (let con2 = 0; con2 < array.length; con2 += 1){
//     if (smallestOfArray.length > array[con2].length){
//         smallestOfArray = array[con2];
//     }
// }

// console.log('A maior palavra do Array é: ' + biggestOfArray);
// console.log('A menor palavra do Array é: ' + smallestOfArray);

//EXERCICIO - 04 Um número primo é aquele divisível apenas por 1 e por ele mesmo. 
//Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
let biggestPrimeNumber = 0;

for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);