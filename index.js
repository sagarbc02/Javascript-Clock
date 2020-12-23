setInterval(() => {
    

theDate = new Date;
theday = theDate.getDay();
today = theDate.getDate()+"/"+theDate.getMonth()+"/"+theDate.getFullYear();

hours = theDate.getHours();

min = theDate.getMinutes();
seconds = theDate.getSeconds();
time = hours +":"+ min + ":" + seconds  
c=["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
for(var i=0;i<7;i++){
if (theday==i){
    theday=c[i]
    
}
}

document.getElementById("time").innerHTML = theday +" "+ today +" " + time;
}, 1000);