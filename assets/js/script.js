const display = document.querySelector('.display');

const keypadClearButton = document.querySelector('.keypad-button-clear');

const keypadEqualsButton = document.querySelector('.keypad-button-equals');

const keypadAddButton = document.querySelector('.keypad-button-add');
const keypadSubtractButton = document.querySelector('.keypad-button-subtract');
const keypadMultiplyButton = document.querySelector('.keypad-button-multiply');
const keypadDivideButton = document.querySelector('.keypad-button-divide');

const keypadDecimalButton = document.querySelector('.keypad-button-decimal');
const keypadZeroButton = document.querySelector('.keypad-button-zero');
const keypadOneButton = document.querySelector('.keypad-button-one');
const keypadTwoButton = document.querySelector('.keypad-button-two');
const keypadThreeButton = document.querySelector('.keypad-button-three');
const keypadFourButton = document.querySelector('.keypad-button-four');
const keypadFiveButton = document.querySelector('.keypad-button-five');
const keypadSixButton = document.querySelector('.keypad-button-six');
const keypadSevenButton = document.querySelector('.keypad-button-seven');
const keypadEightButton = document.querySelector('.keypad-button-eight');
const keypadNineButton = document.querySelector('.keypad-button-nine');

const keypadButtonsArray = [
    keypadZeroButton,
    keypadOneButton,
    keypadTwoButton,
    keypadThreeButton,
    keypadFourButton,
    keypadFiveButton,
    keypadSixButton,
    keypadSevenButton,
    keypadEightButton,
    keypadNineButton,
    keypadDecimalButton
];

const keypadOperatorsArray = [
    keypadAddButton,
    keypadSubtractButton,
    keypadMultiplyButton,
    keypadDivideButton
];

const keypadOperators = [
    '+',
    '-',
    'x',
    '/'
];


for (let i = 0; i < keypadButtonsArray.length; i++) {
    keypadButtonsArray[i].addEventListener('click', function () {
        if (display.textContent === '0') {
            display.textContent = this.textContent;
        } else {
            display.textContent += this.textContent;
        }
    });
}

for (let i = 0; i < keypadOperatorsArray.length; i++) {
    keypadOperatorsArray[i].addEventListener('click', function () {
        for (let j = 0; j < keypadOperators.length; j++) {
            if (display.textContent.includes(keypadOperators[j]) === false) {
                display.textContent += this.textContent;
                break;
            } else if (display.textContent.charAt(display.textContent.length - 1) === keypadOperators[j]) {
                display.textContent = display.textContent.slice(0, -1) + this.textContent;
                break;
            }
        }
    });
}

keypadClearButton.addEventListener('click', function () {
    display.textContent = '0';
});

keypadEqualsButton.addEventListener('click', function () {
    if (display.textContent.includes('x')) {
        display.textContent = display.textContent.replace('x', '*');
    }
    let expression = display.textContent;
    let result = eval(expression);
    display.textContent = result;
});
