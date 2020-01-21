var total = 0;
var numberOfPeople = 0;
var serviceSatisfaction = 'Service was good';

// This listens the the form submit event and calls showTip
document.getElementById('calculatorForm').addEventListener('submit', showTip);

// This listens to the inputs and updates the variables above
document.querySelector('input[name=total]').addEventListener('change', function(event) {
    total = parseFloat(event.target.value);
});
document.querySelector('input[name=numPeople]').addEventListener('change', function(event) {
    total = parseFloat(event.target.value);
});
document.querySelector('select[name=serviceSatisfaction]').addEventListener('change', function(event) {
    total = parseFloat(event.target.value);
});

function showTip(event) {
    event.preventDefault();
    var tipAmount = 0;

    // Your JavaScript Code will go here!

    document.getElementById('tipAmount').innerHTML = 'Each person needs to contribute $' + tipAmount.toString();
    return false;
}