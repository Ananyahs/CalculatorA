let displayValue = '';

function appendToDisplay(value) {
  if(value==='AC')
    displayValue="";
  else
    displayValue += value;
  document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    const result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
