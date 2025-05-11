let billAmount = document.getElementById("bill");
let tipAmount = document.getElementById("tip");
const buntevent = document.getElementById("calculate");
function calculateTip() {
    let tip = billAmount.value * (1 + (tipAmount.value / 100));
}
buntevent.addEventListener("click", calculateTip);