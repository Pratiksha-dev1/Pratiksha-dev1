function showTime()
{
let date = new Date();
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds(); 
let session;

if(h == 12)
{
    h=0;
    session = "AM";
}

if(h > 12)
{
     h -= 12;
     session = "PM";

}

h = (h<10) ? h= "0"+ h : h;
m = (m<10) ? m= "0"+ m : m;
s = (s<10) ? s= "0"+ s : s; 

let screenTime = `${h} : ${m} : ${s}  ${session}`;
console.log(screenTime);
document.getElementById("time").innerHTML = screenTime;

setTimeout(showTime, 1000);
}

showTime();

