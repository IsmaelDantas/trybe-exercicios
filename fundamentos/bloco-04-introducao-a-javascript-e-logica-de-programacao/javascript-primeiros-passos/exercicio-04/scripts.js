let a = 10;
let b = 20;

console.log("Adição:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);
console.log("Módulo:", a % b);

let c;
let d;

if (a > b) {
    console.log (a, ">", b);
} else if (b < a) {
    console.log (b, ">", a);
} else {
    console.log (a, "=", b);
}

c = 30;

if (a > b && a > c) {
    console.log(a , ">", b, "e", a, ">", c);
} else if (b > a && b > c) {
    console.log(b , ">", a, "e", b, ">", c);
} else if (c > a && c > b) {
    console.log(c , ">", a, "e", c, ">", b);
} else {
    console.log("Não há um maior de três números")
}

const e = 10;
if (e > 0) {
    console.log("Positive");
} else if (e < 0) {
    console.log("Negative");
} else {
    console.log("Zero")
}
console.log ("Programa triângulo")
const ang1 = 2;
const ang2 = 5;
const ang3 = 7;

if (ang1 > 0 && ang2 > 0 && ang3>0 && ang1+ang2+ang3===180) {
    console.log("positive");
} else if (ang1 < 0 || ang2 < 0 || ang3 < 0 || ang1+ang2+ang3!=180){
    console.log("negative");
} else {
    console.log("Erro");
}

let chessPiece="KING".toLowerCase();
switch(chessPiece) {
    case "pawn":
        console.log("Primeiro movimento dois movimentos a frente. Após isso, um movimento pra frente ");
        break;
    
    case "horse":
        console.log("Anda em formato de L");
        break;
    
    case "bishop":
        console.log("Anda nas diagonais");
        break;
    case "rook":
        console.log("Anda tanto na horizontal quanto na vertical");
        break;
    case "king":
        console.log("Um movimento para todas as direções");
        break;
    case "queen":
        console.log("Tanto nas diagonais como nas verticais e horizontais");
        break;
} 

let nota = 20;
if (nota/100>=0.9){
    nota = 'A';
} else if (nota/100>=0.8 && nota/100<0.9){
    nota = 'B';
} else if (nota/100>=0.7 && nota/100<0.8){
    nota = 'C';
} else if (nota/100>=0.6 && nota/100<0.7){
    nota = 'D';
} else if (nota/100>=0.5 && nota/100<0.6){
    nota = 'E';
} else if (nota/100<0.5) {
    nota = 'F';
} else if (nota < 0 || nota > 100) {
    console.log("Error");
} else {
    console.log("Dado inválido")
}

console.log(nota);

const number1 = 10;
const number2 = 20;
const number3 = 30;

if(number1%2==0 || number2%2==0 || number3%2==0) {
    console.log("true");
}

if(number1%2==1 || number2%2==1 || number3%2==1) {
    console.log("false");
}

const productCost = 400;
const saleValue = 500;

if (productCost === 0 || saleValue === 0){
    return;
}

let valueTotalCost = productCost + 0.2;
let profit = saleValue - valueTotalCost;
console.log('Valor Total de Custo:',valueTotalCost);
console.log('Lucro:',profit);

let salaryBrute = 3000;
let salaryLiquid;
let ir;

if (salaryBrute <= 1556.94){
    salaryLiquid = salaryBrute - (salaryBrute * 0.08);  
} else if (salaryBrute >= 1556.95 && salaryBrute <= 2594.92){
    salaryLiquid = salaryBrute - (salaryBrute * 0.09);
} else if (salaryBrute >= 2594.93 && salaryBrute <= 5189.82){
    salaryLiquid = salaryBrute - (salaryBrute * 0.11);
} else if (salaryBrute > 5189.82){
    salaryLiquid = salaryBrute - 570.88;
} else {
    console.log('Valor inválido');
    return;
} 

if (salaryBrute <= 1903.98){
    ir = 0;
} else if (salaryBrute >= 1903.99 && salaryBrute <= 2826.65){
    ir = (salaryLiquid * 0.075) - 142.80;
} else if (salaryBrute >= 2826.66 && salaryBrute <= 3751.05){
    ir = (salaryLiquid * 0.15) - 354.80;
} else if (salaryBrute >= 3751.06 && salaryBrute <= 4664.68){
    ir = (salaryLiquid * 0,225) - 636.13;
} else if (salaryBrute > 4664.68){
    ir = (salaryLiquid * 0.275) - 869.36;
} else {
    console.log('Erro. Dado inválido');
    return;
}
salaryLiquid = salaryLiquid - ir;
console.log(salaryLiquid);

