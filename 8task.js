const readlineSync = require('readline-sync');
function calculateBalance (incomes = readlineSync.question('Доходы: '), expenses = readlineSync.question('Расходы: ')) {
    return incomes - expenses;
}
console.log(calculateBalance());