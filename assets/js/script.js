const calculatorData = {
    calculation: '',
    result: '',
    displayResults: false
}

const buttons = [document.querySelectorAll('[data-action]')];
const digitsBtns = buttons.filter(button => /[0-9]/.test(button.textContent));

console.log(digitsBtns);