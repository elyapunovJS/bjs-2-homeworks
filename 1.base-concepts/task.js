"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  const D = Math.pow(b, 2) - 4 * a * c;

  if(D === 0) {
    arr.push(-b / 2 * a);
  }

  if(D > 0) {
    arr.push((-b + Math.sqrt(D))/(2 * a));
    arr.push((-b - Math.sqrt(D))/(2 * a));
  }
 
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = +percent;
  contribution = +contribution;
  amount = +amount;
  countMonths = +countMonths ;

  if(isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }

  const monthPercent = percent / 100 / 12;
  const creditBody = amount - contribution;
  const monthlyPayment = creditBody * (monthPercent + (monthPercent / ((Math.pow((1 + monthPercent), countMonths) - 1))));
  const fullPayment = Number((monthlyPayment * countMonths).toFixed(2));

  return fullPayment;
}

