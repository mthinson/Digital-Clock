//globals

const hr = document.getElementById('hours');
const min = document.getElementById('minutes');
const sec = document.getElementById('seconds');


// get time
function getTime(){
    const d = new Date();
    hr.innerHTML =  d.getHours().toString().padStart(2, "0");
    min.innerHTML = ": " + d.getMinutes().toString().padStart(2, "0");
    sec.innerHTML = ": " + d.getSeconds().toString().padStart(2, "0");
    
    
};
// get date
function getDate(){
    const d = new Date();
   const month = d.getMonth() + 1;
   const day = d.getDate();
   const year = d.getFullYear();

    document.getElementById("date").innerHTML = `${month}/ ${day}/ ${year}`; 
    console.log(d.toString())
  
};
//call functions

getTime();
setInterval(getTime,1000);
getDate();



