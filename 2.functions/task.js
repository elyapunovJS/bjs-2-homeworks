function getArrayParams(...arr) {
  const min =  Math.min(...arr);
  const max = Math.max(...arr);
  const arrSum = arr.reduce((res, item) => res + item);
  const avg = +(arrSum / arr.length).toFixed(2);

  return { min, max, avg };
}

function summElementsWorker(...arr) {
  return arr.reduce((res, item) => res + item, 0);
}

function differenceMaxMinWorker(...arr) {
  if(arr.length === 0) return 0;

  const min =  Math.min(...arr);
  const max = Math.max(...arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  arr.forEach(item => {
    if(item % 2 === 0) {
      sumEvenElement += item;
    } else {
      sumOddElement += item;
    }
  });

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if(arr.length === 0) return 0;

  const evenElements = arr.filter(item => item % 2 === 0);
  const sumEvenElements = evenElements.reduce((res, item) => res + item, 0);

  return +(sumEvenElements / evenElements.length);
}

function makeWork (arrOfArr, func) {
  const result = arrOfArr.map(item => {
    return func(...item);
  })

  return Math.max(...result);
}
