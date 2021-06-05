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
    appData.addExpenses = addExpenses.toLowerCase().split(', ');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    let getExpensesMonth = function() {
    
      for (let i = 0; i < 2; i++) {
        let expencesKey = prompt('Введите обязательную статью расходов.', 'Статья расходов');
        appData.expences[expencesKey] = +prompt('Во сколько это обойдется?');
      }

      for ( key in appData.expences) {
        appData.expensesMonth += appData.expences[key];
      };
    }
    getExpensesMonth();
  },
  getBudget: function (m, n) {
    appData.budgetMonth =  m - n;
    appData.budgetDay = appData.budgetMonth / 30;
  },
  targetMonth: function (m, a) {
    // let result = m / a;
    
    let result = appData.mission / appData.getBudget;
  
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
    } else if ( appData.budgetDay >= 0) {
      console.log('К сожалению у вас уровень дохода ниже среднего');
    } else {
      console.log('Что-то пошло не так');
    }
  }
}

appData.asking();
appData.getBudget(appData.budget, appData.expensesMonth);

console.log(appData.getBudget);
console.log(appData.budgetDay);
console.log(appData.budgetMonth);

income = 'фриланс';

let expencesAmount = appData.expensesMonth;

// console.log( appData.accumulatedMonth(money, expencesAmount) );

// let accumulatedMonth = appData.accumulatedMonth(money, expencesAmount);



// console.log(appData.targetMonth(appData.mission, accumulatedMonth));

// appData.budgetDay = accumulatedMonth / 30;
console.log('Бюджет на день = ' + appData.budgetDay);


console.log(appData.targetMonth());
console.log(typeof appData.targetMonth());
appData.statusIncome();