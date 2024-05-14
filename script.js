let displayValue = '';

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function appendValue(value) {
  displayValue += value;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}
