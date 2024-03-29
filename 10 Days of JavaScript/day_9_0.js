const elem = document.getElementById('res');
const $ = (selector, callback) =>
  document.querySelector(selector).addEventListener('click', callback);

$('#btn0', clickZero);
$('#btn1', clickOne);
$('#btnClr', clickClr);
$('#btnEql', clickEql);
$('#btnSum', clickSum);
$('#btnSub', clickSub);
$('#btnMul', clickMul);
$('#btnDiv', clickDiv);

function checkOperator() {
  if (
    elem.innerHTML.endsWith('+') ||
    elem.innerHTML.endsWith('-') ||
    elem.innerHTML.endsWith('*') ||
    elem.innerHTML.endsWith('/')
  ) {
    return true;
  }
}

function clickZero() {
  elem.innerHTML += '0';
}

function clickOne() {
  elem.innerHTML += '1';
}

function clickClr() {
  elem.innerHTML = '';
}

function clickEql() {
  if (!checkOperator()) {
    const re = /\d+/g;
    const re2 = /[\+\-\*\/]+/g;
    const numbers = elem.innerHTML.match(re);
    const operations = elem.innerHTML.match(re2);
    while (operations.length > 0) {
      if (operations.includes('*')) {
        const indexOfMul = operations.indexOf('*');
        const mul =
          (indexOfMul !== 0
            ? parseInt(numbers[indexOfMul - 1], 2)
            : parseInt(numbers[indexOfMul], 2)) *
          parseInt(numbers[indexOfMul + 1], 2);
        numbers.splice(indexOfMul, 2);
        numbers.splice(indexOfMul, 0, mul.toString(2));
        operations.splice(indexOfMul, 1);
      } else if (operations.includes('/')) {
        const indexOfDiv = operations.indexOf('/');
        const division =
          (indexOfDiv !== 0
            ? parseInt(numbers[indexOfDiv - 1], 2)
            : parseInt(numbers[indexOfDiv], 2)) /
          parseInt(numbers[indexOfDiv + 1], 2);
        numbers.splice(indexOfDiv, 2);
        numbers.splice(indexOfDiv, 0, division.toString(2));
        operations.splice(indexOfDiv, 1);
      } else if (operations.includes('+')) {
        const indexOfSum = operations.indexOf('+');
        const sum =
          (indexOfSum !== 0
            ? parseInt(numbers[indexOfSum - 1], 2)
            : parseInt(numbers[indexOfSum], 2)) +
          parseInt(numbers[indexOfSum + 1], 2);
        numbers.splice(indexOfSum, 2);
        numbers.splice(indexOfSum, 0, sum.toString(2));
        operations.splice(indexOfSum, 1);
      } else {
        const indexOfSub = operations.indexOf('-');
        const sub =
          (indexOfSub !== 0
            ? parseInt(numbers[indexOfSub - 1], 2)
            : parseInt(numbers[indexOfSub], 2)) -
          parseInt(numbers[indexOfSub + 1], 2);
        numbers.splice(indexOfSub, 2);
        numbers.splice(indexOfSub, 0, sub.toString(2));
        operations.splice(indexOfSub, 1);
      }
    }
    elem.innerHTML = numbers[0].toString(2);
  } else {
    alert('Line must ends with number.');
  }
}

function clickSum() {
  if (elem.innerHTML.length !== 0 && !checkOperator()) {
    elem.innerHTML += '+';
  }
}

function clickSub() {
  if (elem.innerHTML.length !== 0 && !checkOperator()) {
    elem.innerHTML += '-';
  }
}

function clickMul() {
  if (elem.innerHTML.length !== 0 && !checkOperator()) {
    elem.innerHTML += '*';
  }
}

function clickDiv() {
  if (elem.innerHTML.length !== 0 && !checkOperator()) {
    elem.innerHTML += '/';
  }
}
