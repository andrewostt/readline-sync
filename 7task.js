const readlineSync = require('readline-sync');
function countWords (sentence = readlineSync.question('Ваше предложение: ')) {
    return sentence.trim().split(' ').length;
}
console.log(countWords());