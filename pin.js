function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin;
    }


}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;

}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const numberInput = document.getElementById('number-input');
    if (isNaN(number)) {
        if (number == 'C') {
            numberInput.value = '';
        }
    }
    else {
        const previousNumber = numberInput.value;
        const newNumber = previousNumber + number;
        numberInput.value = newNumber;
    }

})

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const numberInput = document.getElementById('number-input').value;
    const successMessage = document.getElementById('pin-matched');
    const failureMessage = document.getElementById('pin-failed');
    if (pin == numberInput) {

        successMessage.style.display = 'block';
        failureMessage.style.display = 'none';
    }
    else {
        successMessage.style.display = 'none';
        failureMessage.style.display = 'block';
    }
}