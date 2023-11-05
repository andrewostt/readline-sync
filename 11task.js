const readlineSync = require('readline-sync');
function calculateEmployeeBonus (salary = readlineSync.question('Зарплата сотрудника: '), performanceRating = readlineSync.question('Рейтинг его производительности: ')) {
    if (performanceRating > 8) {
        return `Бонус составляет: ${salary * 0.2}`;
    }
    return `Бонус составляет: ${salary * 0.1}`;
}
console.log(calculateEmployeeBonus(100000, 6));