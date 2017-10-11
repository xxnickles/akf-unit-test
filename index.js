window.evenOddCalculator = window.evenOddCalculator || {};
window.evenOddCalculator.initialize = function () {
    document.getElementById('go-button').disabled = true
    document.getElementById('input-control').addEventListener('change', function (e) {      
        if (isAValidNumber(e.target.value)) {        
            document.getElementById('go-button').disabled = false
        } else {
            document.getElementById('go-button').disabled = true          
        }
    })
}


function isAValidNumber(value) {   
    return !isNaN(parseInt(value))
}

function checkOdd(number) {
    return number % 2 !== 0
}

function checkEven(number) {
    return number % 2 === 0
}