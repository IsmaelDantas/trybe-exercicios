// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log('Segundo Exercício')
let soma = 0;
for (let index = 0; index < numbers.length; index += 1){
    soma = soma + numbers[index];
}

console.log('Soma:',soma);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
console.log('Terceiro Exercício')
let aritmethic = 0;
for (let i = 0; i < numbers.length; i += 1 ){
    aritmethic = soma / numbers.length;
}
//Quarto exercício: Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, 
//imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: 
//"valor menor ou igual a 20";

if (aritmethic > 20) {
    console.log('média aritmética', aritmethic, ", maior que 20.")
} else {
    console.log('média aritmética', aritmethic, ", menor ou igual a 20.")

}

//Utilizando for , descubra qual o maior valor contido no array e imprima-o;
console.log('Quinto exercício')
let largest = 0;

for (let cont = 0; cont < numbers.length; cont += 1){
    if (numbers[cont] > largest){
        largest = numbers[cont];
    }
}

console.log('maior número:',largest)

console.log('Sexto exercício');

let impares = 0;

for (let con = 0; con < numbers.length; con += 1){
    if (numbers[con]%2 != 0){
        impares = impares + 1;
    }
}
 if (impares === 0){
     console.log('Não há nenhum número par.');
 }

 console.log('Números impares;', impares);

 //Utilizando for , descubra qual o menor valor contido no array e imprima-o;
console.log('Sétimo Exercício');
let smallest=numbers[0];

for (let cont = 0; cont < numbers.length; cont += 1){
    if (numbers[cont] < smallest){
        smallest = numbers[cont];
    }
}

console.log('menor número:', smallest);

//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

console.log('Oitavo exercício');
let newArray = [];
for (let nov = 1; nov <= 25; nov += 1){
    newArray.push(nov);
}

console.log('Nova Array de números de 1 ao 25:',newArray);


//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
console.log('Nono exercício');
let divisao;
for (let pol = 0; pol < newArray.length; pol += 1){
    divisao = newArray[pol]/2;
    console.log('A divisão entre', newArray[pol], 'por 2 é:', divisao);
}
