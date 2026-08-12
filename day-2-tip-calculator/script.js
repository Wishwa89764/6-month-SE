let tip;
const billAmountInput = document.getElementById("bill_amount");

billAmountInput.focus();
function clear(){
    billAmountInput.value=Number("");
}
function tipCal(precentage){
    let billAmount = Number(billAmountInput.value);
    let total;
    tip=(Number(billAmountInput.value)*precentage)/100;
    console.log(tip);
    clear();
    total= Number(tip+billAmount);
    billAmountInput.value= total;
}