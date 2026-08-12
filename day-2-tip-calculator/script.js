let tip;
const billInput = document.getElementById("bill_amount");
const tipResult = document.getElementById("tip_result");
const totalResult = document.getElementById("total_result");

billAmountInput.focus();

function tipCal(percentage){
    let bill = parseFloat(billInput.value);
    if(!bill || bill <= 0){
        alert("Enter a valid bill amount!");
        return;
    }
    let tip = (bill * percentage) / 100;
    let total = bill + tip;
    
    tipResult.textContent = tip.toFixed(2);
    totalResult.textContent = total.toFixed(2);
}