const readlineSync = require('readline-sync');
function calculateDiscount (price = readlineSync.question('Цена товара: '), discountPercentage = readlineSync.question('Процент скидки:')) {
    return `Сумма с учётом скидки: ${price - ((price / 100) * discountPercentage)}`;
}
console.log(calculateDiscount());