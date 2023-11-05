const readlineSync = require('readline-sync');
function calculateTime (distance = readlineSync.question('Расстояние: '), speed = readlineSync.question('Скорость: ')) {
    return `${Math.floor(distance / speed)}ч. ${Math.round(((distance / speed) - Math.floor(distance / speed)) * 60)}м.`;
}
console.log(calculateTime());