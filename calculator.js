window.addEventListener('load', function(e){
    console.log('LOADED');

});
var calculator = document.createElement('table');
calculator.id = 'calculator';

var solution = document.createElement('thead');
solution.id = 'solution';

var solutionRow = document.createElement('tr');
solutionRow.id = 'solutionRow';

var solutionData = document.createElement('td');
solutionData.id = 'solutionData';
solutionData.colSpan = '4';
solutionData.style.height = '90px';
solutionData.style.backgroundColor = "rgb(50, 50, 50)";
solutionData.style.color = "white";

var calcBody = document.createElement('tbody');

var firstRow = document.createElement('tr')
firstRow.id = 'firstRow';
firstRow.style.height = '60px';

var secondRow = document.createElement('tr')
secondRow.id = 'secondRow';
secondRow.style.height = '60px';

var thirdRow = document.createElement('tr')
thirdRow.id = 'thirdRow';
thirdRow.style.height = '60px';

var fourthRow = document.createElement('tr')
fourthRow.id = 'fourthRow';
fourthRow.style.height = '60px';

var fifthRow = document.createElement('tr')
fifthRow.id = 'fifthRow';
fifthRow.style.height = '60px';

// First Row of Buttons
var btnC = document.createElement('td')
btnC.id = 'btnC';
btnC.textContent = 'C';
btnC.style.backgroundColor = "rgba(111, 111, 111, 0.6)";

var btnPlusMinus = document.createElement('td')
btnPlusMinus.id = 'btnPlusMinus';
btnPlusMinus.textContent = '+/-';
btnPlusMinus.style.backgroundColor = "rgba(111, 111, 111, 0.6)";

var btnMod = document.createElement('td')
btnMod.id = 'btnMod';
btnMod.textContent = '%';
btnMod.style.backgroundColor = "rgba(111, 111, 111, 0.6)";

var btnDiv = document.createElement('td')
btnDiv.id = 'btnDiv';
btnDiv.textContent = '/';
btnDiv.style.backgroundColor = "rgb(249, 170, 52)";


// Second Row of Buttons
var btn7 = document.createElement('td')
btn7.id = 'btn7';
btn7.textContent = '7';
btn7.style.backgroundColor = "rgba(176, 172, 173, 0.63)";

var btn8 = document.createElement('td')
btn8.id = 'btn8';
btn8.textContent = '8';
btn8.style.backgroundColor = "rgba(176, 172, 173, 0.63)";

var btn9 = document.createElement('td')
btn9.id = 'btn9';
btn9.textContent = '9';
btn9.style.backgroundColor = "rgba(176, 172, 173, 0.63)";

var btnMult = document.createElement('td')
btnMult.id = 'btnMult';
btnMult.textContent = 'x';
btnMult.style.backgroundColor = "rgb(249, 170, 52)";


// Third Row of Buttons
var btn4 = document.createElement('td')
btn4.id = 'btn4';
btn4.textContent = '4';
btn4.style.backgroundColor = "rgba(176, 172, 173, 0.63)";

var btn5 = document.createElement('td')
btn5.id = 'btn5';
btn5.textContent = '5';
btn5.style.backgroundColor = "rgba(176, 172, 173, 0.63)";

var btn6 = document.createElement('td')
btn6.id = 'btn6';
btn6.textContent = '6';
btn6.style.backgroundColor = "rgba(176, 172, 173, 0.63)";

var btnSub = document.createElement('td')
btnSub.id = 'btnSub';
btnSub.textContent = '-';
btnSub.style.backgroundColor = "rgb(249, 170, 52)";


// Fourth Row of Buttons
var btn1 = document.createElement('td')
btn1.id = 'btn1';
btn1.textContent = '1';
btn1.style.backgroundColor = "rgba(176, 172, 173, 0.63)";

var btn2 = document.createElement('td')
btn2.id = 'btn2';
btn2.textContent = '2';
btn2.style.backgroundColor = "rgba(176, 172, 173, 0.63)";

var btn3 = document.createElement('td')
btn3.id = 'btn3';
btn3.textContent = '3';
btn3.style.backgroundColor = "rgba(176, 172, 173, 0.63)";

var btnAdd = document.createElement('td')
btnAdd.id = 'btnAdd';
btnAdd.textContent = '+';
btnAdd.style.backgroundColor = "rgb(249, 170, 52)";


// Fifth Row of Buttons
var btn0 = document.createElement('td')
btn0.id = 'btn0';
btn0.textContent = '0';
btn0.colSpan = '2';
btn0.style.backgroundColor = "rgba(176, 172, 173, 0.63)";

var btnDecimal = document.createElement('td')
btnDecimal.id = 'btnDecimal';
btnDecimal.textContent = '.';
btnDecimal.style.backgroundColor = "rgba(176, 172, 173, 0.63)";

var btnEquals = document.createElement('td')
btnEquals.id = 'btnEquals';
btnEquals.textContent = '=';
btnEquals.style.backgroundColor = "rgb(249, 170, 52)";


firstRow.appendChild(btnC);
firstRow.appendChild(btnPlusMinus);
firstRow.appendChild(btnMod);
firstRow.appendChild(btnDiv);

secondRow.appendChild(btn7);
secondRow.appendChild(btn8);
secondRow.appendChild(btn9);
secondRow.appendChild(btnMult);

thirdRow.appendChild(btn4);
thirdRow.appendChild(btn5);
thirdRow.appendChild(btn6);
thirdRow.appendChild(btnSub);

fourthRow.appendChild(btn1);
fourthRow.appendChild(btn2);
fourthRow.appendChild(btn3);
fourthRow.appendChild(btnAdd);

fifthRow.appendChild(btn0);
fifthRow.appendChild(btnDecimal);
fifthRow.appendChild(btnEquals);

solutionRow.appendChild(solutionData);
solution.appendChild(solutionRow);
calculator.appendChild(solution);
calculator.appendChild(firstRow);
calculator.appendChild(secondRow);
calculator.appendChild(thirdRow);
calculator.appendChild(fourthRow);
calculator.appendChild(fifthRow);
calculator.appendChild(calcBody);
document.body.appendChild(calculator);

var operand = '';

var currentNum = 0;

var notFirst = false;


btnC.addEventListener('click', function(e){
operand = '';
currentNum = 0;
solutionData.textContent = '';
notFirst = false;
    console.log('C');
});

btnPlusMinus.addEventListener('click', function(e){
  solutionData.textContent = (solutionData.textContent * -1);
    console.log('+/-');
});

btnMod.addEventListener('click', function(e){
  currentNum = calculate(solutionData.textContent, currentNum, operand);
  operand = '%';
  notFirst = false;
    console.log('Mod');
});

btnDiv.addEventListener('click', function(e){
  currentNum = calculate(solutionData.textContent, currentNum, operand);
  operand = '/';
  notFirst = false;
    console.log('/');
});

btn7.addEventListener('click', function(e){
  if (!notFirst) {
    solutionData.textContent = '';
  }
  solutionData.textContent += '7';
  notFirst = true;
    console.log('7');
});

btn8.addEventListener('click', function(e){
  if (!notFirst) {
    solutionData.textContent = '';
  }
  solutionData.textContent += '8';
  notFirst = true;
    console.log('8');
});

btn9.addEventListener('click', function(e){
  if (!notFirst) {
    solutionData.textContent = '';
  }
  solutionData.textContent += '9';
  notFirst = true;
    console.log('9');
});

btnMult.addEventListener('click', function(e){
  currentNum = calculate(solutionData.textContent, currentNum, operand);
  operand = '*';
  notFirst = false;
    console.log('x');
});

btn4.addEventListener('click', function(e){
  if (!notFirst) {
    solutionData.textContent = '';
  }
  solutionData.textContent += '4';
  notFirst = true;
    console.log('4');
});

btn5.addEventListener('click', function(e){
  if (!notFirst) {
    solutionData.textContent = '';
  }
  solutionData.textContent += '5';
  notFirst = true;
    console.log('5');

});

btn6.addEventListener('click', function(e){
  if (!notFirst) {
    solutionData.textContent = '';
  }
  solutionData.textContent += '6';
  notFirst = true;
    console.log('6');
});

btnSub.addEventListener('click', function(e){
  currentNum = calculate(solutionData.textContent, currentNum, operand);
  operand = '-';
  notFirst = false;
    console.log('-');
});

btn1.addEventListener('click', function(e){
  if (!notFirst) {
    solutionData.textContent = '';
  }
  solutionData.textContent += '1';
  notFirst = true;
    console.log('1');
});

btn2.addEventListener('click', function(e){
  if (!notFirst) {
    solutionData.textContent = '';
  }
  solutionData.textContent += '2';
  notFirst = true;
    console.log('2');
});

btn3.addEventListener('click', function(e){
  if (!notFirst) {
    solutionData.textContent = '';
  }
  solutionData.textContent += '3';
  notFirst = true;
    console.log('3');
});

btnAdd.addEventListener('click', function(e){
currentNum = calculate(solutionData.textContent, currentNum, operand);
operand = '+';
notFirst = false;
    console.log('+');
});

btn0.addEventListener('click', function(e){
  if (!notFirst) {
    solutionData.textContent = '';
  }
  solutionData.textContent += '0';
  notFirst = true;
    console.log('0');
});

btnDecimal.addEventListener('click', function(e){
  if (!notFirst) {
    solutionData.textContent = '';
  }

  if(solutionData.textContent === ''){
    solutionData.textContent += '0.';
  }
  else if (solutionData.textContent.indexOf(".") >= 0){
    solutionData.textContent = solutionData.textContent;
  }
  else {
    solutionData.textContent += '.';
  }
  notFirst = true;
    console.log('.');
});

btnEquals.addEventListener('click', function(e){
  currentNum = calculate(solutionData.textContent, currentNum, operand);
  operand = '=';
  notFirst = false;
    console.log('=');
});


var calculate = function (prevCurrent, currentNum, operand) {
  switch (operand) {
    case '+':
    solutionData.textContent = (parseFloat(solutionData.textContent) + (parseFloat(currentNum)));
    break;

    case '-':
    solutionData.textContent = (parseFloat(solutionData.textContent) - (parseFloat(currentNum)));
    break;

    case '*':
    solutionData.textContent = (parseFloat(solutionData.textContent) * (parseFloat(currentNum)));
    break;

    case '/':
    solutionData.textContent = (parseFloat(solutionData.textContent) / (parseFloat(currentNum)));
      break;

    case '%':
    solutionData.textContent = (parseFloat(solutionData.textContent) % (parseFloat(currentNum)));
      break;

    case '=':
    break;
  };
  return solutionData.textContent;
}
