
function getPin() {

    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {

        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click',
    function (event) {

        const number = event.target.innerText;
        const calcShowInput = document.getElementById('typed-numbers');

        if (isNaN(number)) {
            if (number == 'C') {
                calcShowInput.value = '';
            }

        }
        else {
            const previousNumber = calcShowInput.value;
            const newNumber = previousNumber + number;
            calcShowInput.value = newNumber;
        }


    });


function verifypin() {

    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;


    const successMsg = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');

    if (typedNumbers == pin) {

        successMsg.style.display = 'block';
        failError.style.display = 'none';

    }
    else {


        failError.style.display = 'block';
        successMsg.style.display = 'none';
    }







};
