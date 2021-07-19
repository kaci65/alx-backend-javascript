## 0x00-ES6_basic
    ES6 Arrow Functions

### Resources
    ECMAScript 6 - ECMAScript 2015(https://www.w3schools.com/js/js_es6.asp)
    Statements and declarations(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
    Arrow functions(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
    Default parameters(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
    Rest parameter(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
    Javascript ES6 — Iterables and Iterators(https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4?gi=b660cdfaca35)

### Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

    What ES6 is
    New features introduced in ES6
    The difference between a constant and a variable
    Block-scoped variables
    Arrow functions and function parameters default to them
    Rest and spread function parameters
    String templating in ES6
    Object creation and their properties in ES6
    Iterators and for-of loops

### Tasks
### 0-constants.js
Modify

    function taskFirst to instantiate variables using const
    function taskNext to instantiate variables using let

export function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}

### 1-block-scoped.js
Given what you’ve read about var and hoisting, modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.

export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}

### 2-arrow.js
Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)

export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}

### 3-default-parameter.js
Condense the internals of the following function to 1 line - without changing the name of each function/variable.

Hint: The key here to define default parameter values for the function parameters.

export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}

### 4-rest-parameter.js
Modify the following function to return the number of arguments passed to it using the rest parameter syntax

export default function returnHowManyArguments() {

}

Example:

> returnHowManyArguments("Hello", "Holberton", 2020);
3
>

### 5-spread-operator.js
Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.

export default function concatArrays(array1, array2, string) {
}

### 6-string-interpolation.js
Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.

export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return 'As of ' + year + ', it was the seventh-highest income county in the United States'
        / ', with a per capita personal income of ' + budget.income + '. As of 2015, San Francisco'
        / ' proper had a GDP of ' + budget.gdp + ', and a GDP per capita of ' + budget.capita + '.';
}

### 7-getBudgetObject.js
Notice how the keys and the variable names are the same?

Modify the following function’s budget object to simply use the keyname instead.

export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };

  return budget;
}

### 8-getBudgetCurrentYear.js
Rewrite the getBudgetForCurrentYear function to use ES6 computed property names on the budget object

function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`income-${getCurrentYear()}`] = income;
  budget[`gdp-${getCurrentYear()}`] = gdp;
  budget[`capita-${getCurrentYear()}`] = capita;

  return budget;
}

### 9-getFullBudget.js
Rewrite getFullBudgetObject to use ES6 method properties in the fullBudget object

import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: function (income) {
      return `$${income}`;
    },
    getIncomeInEuros: function (income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}

### 10-loops.js
Rewrite the function appendToEachArrayValue to use ES6’s for...of operator. And don’t forget that var is not ES6-friendly.

export default function appendToEachArrayValue(array, appendString) {
  for (var idx in array) {
    var value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}

### 11-createEmployeesObject.js
Write a function named createEmployeesObject that will receive two arguments:

    departmentName (String)
    employees (Array of Strings)

export default function createEmployeesObject(departmentName, employees) {

}

The function should return an object with the following format:

{
     $departmentName: [
          $employees,
     ],
}

### 12-createReportObject.js
Write a function named createReportObject whose parameter, employeesList, is the return value of the previous function createEmployeesObject.

export default function createReportObject(employeesList) {

}

createReportObject should return an object containing the key allEmployees and a method property called getNumberOfDepartments.

allEmployees is a key that maps to an object containing the department name and a list of all the employees in that department. If you’re having trouble, use the spread syntax.

The method property receives employeesList and returns the number of departments. I would suggest suggest thinking back to the ES6 method property syntax.

{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
}; 
