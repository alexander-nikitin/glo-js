let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

let money;

let start = function (n) {
  do {
    money = prompt('Ваш месячный доход?');
  } while (!isNumber(money));
}

start();

let appData = {
  budget: money,
  income: {},
  addIncome: [],
  expences: {},
  addExpences: [],
  deposit: false,
  mission: 1000000,
  period: 12,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function () {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Такси, Кафе, Доставка еды');
    appData.addExpenses = addExpenses.toLowerCase().split(', ')
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
  },
  expensesMonth: function () {
    let sum = 0;
  
    for (let i = 0; i < 2; i++) {
      expences[i] = prompt('Введите обязательную статью расходов.', 'Статья расходов');
  
      sum += +prompt('Во сколько это обойдется?')
    }
    
    return sum;
  },
  accumulatedMonth: function (m, n) {
    return m - n;
  },
  targetMonth: function (m, a) {
    let result = m / a;
  
    if (result < 0) {
      return 'Цель не будет достигнута'
    } else {
      return result;
    }
  },
  statusIncome: function (a) {
    if ( appData.budgetDay >= 1200 ) {
      console.log('У вас высокий уровень дохода');
    } else if ( appData.budgetDay >=600) {
      console.log('У вас средний уровень дохода');
    } else if ( appData.budgetDay < 600) {
      console.log('К сожалению у вас уровень дохода ниже среднего');
    } else {
      console.log('Что-то пошло не так');
    }
  }
}

console.log(appData.budget);

let expences = [];

income = 'фриланс';

let getExpensesMonth = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    expences[i] = prompt('Введите обязательную статью расходов.', 'Статья расходов');

    sum += +prompt('Во сколько это обойдется?')
  }
  
  return sum;
}

let expencesAmount = getExpensesMonth();

console.log( appData.accumulatedMonth(money, expencesAmount) );

let accumulatedMonth = appData.accumulatedMonth(money, expencesAmount);



console.log(appData.targetMonth(appData.mission, appData.accumulatedMonth()));

appData.budgetDay = appData.accumulatedMonth / 30;
console.log('Бюджет на день = ' + appData.budgetDay);



appData.statusIncome();