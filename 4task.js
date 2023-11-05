const readlineSync = require('readline-sync');
function calculateRectangleProperties (width = readlineSync.question('Ширина: '), height = readlineSync.question('Высота: ')) {
    return `Периметр: ${(width * 2) + (height * 2)}\nПлощадь: ${width * height}`;
}
console.log(calculateRectangleProperties());