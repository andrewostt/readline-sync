const readlineSync = require('readline-sync');
function incomeTaxCalculator (income = readlineSync.question('Сумма дохода: ')) {
    return `Налог на доходы: ${(income / 100) * 15}`;
}
console.log(incomeTaxCalculator());