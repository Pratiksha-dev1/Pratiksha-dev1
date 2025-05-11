let billAmount = document.getElementById("bill");
let tipAmount = document.getElementById("tip");
function calculateTip() {
    let tip = billAmount.value * (1 + (tipAmount.value / 100));
}