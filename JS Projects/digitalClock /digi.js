let date = new Date();
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds(); 

let screenTime = `${h} : ${m} : ${s}`;
console.log(screenTime);


document.getElementById("time").innerHTML = screenTime;