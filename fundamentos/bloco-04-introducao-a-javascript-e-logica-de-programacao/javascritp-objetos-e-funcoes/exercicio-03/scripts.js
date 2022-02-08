// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindrome(word){
    wordSplit = word.split('');
    wordReverse = wordSplit.reverse();
    wordJoin = wordReverse.join('');
    if (word === wordJoin){
        return true;
    } else {
        return false;
    }
}

console.log(palindrome('arara'));