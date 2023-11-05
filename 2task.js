const readlineSync = require('readline-sync');
function celsiusToFahrenheit (celsius = readlineSync.question('Градусы в Цельсия: ')) {
    return `Градусы в Фаренгейтах: ${(celsius * 1.8) + 32}`;
}
console.log(celsiusToFahrenheit());