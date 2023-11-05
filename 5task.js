const readlineSync = require('readline-sync');
function calculateDistance (x1 = readlineSync.question('X первой точки: '), y1 = readlineSync.question('Y первой точки:'), x2 = readlineSync.question('X второй точки: '), y2 = readlineSync.question('Y второй точки: ')) {
    return `Расстояние между точками равно: ${Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))}`;
}
console.log(calculateDistance());