const display = document.getElementById('display');

const keypadClearButton = document.getElementById('keypad-button-clear');
const keypadEqualsButton = document.getElementById('keypad-button-equals');
const keypadAddButton = document.getElementById('keypad-button-add');
const keypadSubtractButton = document.getElementById('keypad-button-subtract');
const keypadMultiplyButton = document.getElementById('keypad-button-multiply');
const keypadDivideButton = document.getElementById('keypad-button-divide');
const keypadDecimalButton = document.getElementById('keypad-button-decimal');
const keypadZeroButton = document.getElementById('keypad-button-zero');
const keypadOneButton = document.getElementById('keypad-button-one');
const keypadTwoButton = document.getElementById('keypad-button-two');
const keypadThreeButton = document.getElementById('keypad-button-three');
const keypadFourButton = document.getElementById('keypad-button-four');
const keypadFiveButton = document.getElementById('keypad-button-five');
const keypadSixButton = document.getElementById('keypad-button-six');
const keypadSevenButton = document.getElementById('keypad-button-seven');
const keypadEightButton = document.getElementById('keypad-button-eight');
const keypadNineButton = document.getElementById('keypad-button-nine');

const keypadButtonsArray = [  keypadZeroButton,  keypadOneButton,  keypadTwoButton,  keypadThreeButton,  keypadFourButton,  keypadFiveButton,  keypadSixButton,  keypadSevenButton,  keypadEightButton,  keypadNineButton,  keypadDecimalButton];

const keypadOperatorsArray = [  keypadAddButton,  keypadSubtractButton,  keypadMultiplyButton,  keypadDivideButton];

const keypadOperators = [  '+',  '-',  'x',  '/'];

function updateDisplay(button) {
  if (display.textContent === '0') {
    display.textContent = button.textContent;
  } else {
    display.textContent += button.textContent;
  }
}

function updateOperator(button) {
  for (let j = 0; j < keypadOperators.length; j++) {
    if (display.textContent.includes(keypadOperators[j]) === false) {
      display.textContent += button.textContent;
      break;
    } else if (display.textContent.charAt(display.textContent.length - 1) === keypadOperators[j]) {
      display.textContent = display.textContent.slice(0, -1) + button.textContent;
      break;
    }
  }
}

function clearDisplay() {
  display.textContent = '0';
}

function calculateResult() {
  if (display.textContent.includes('x')) {
    display.textContent = display.textContent.replace('x', '*');
  }
  let expression = display.textContent;
  let result = eval(expression);
  display.textContent = result;
}

for (let i = 0; i < keypadButtonsArray.length; i++) {
  keypadButtonsArray[i].addEventListener('click', function() {
    updateDisplay(this);
  });
}

for (let i = 0; i < keypadOperatorsArray.length; i++) {
  keypadOperatorsArray[i].addEventListener('click', function() {
    updateOperator(this);
  });
}

keypadClearButton.addEventListener('click', clearDisplay);
keypadEqualsButton.addEventListener('click', calculateResult);

