let valueDisplay = document.querySelectorAll(".number");
let interval = 5000;

valueDisplay.forEach((value)=>{
    let startVal =0;
    let endVal = parseInt(value.getAttribute("data-val"));
    let duration = Math.floor(interval/endVal);
    let counter = setInterval(()=>{
        startVal += 1;
        value.textContent = startVal;
        if(startVal == endVal)
        {
            clearInterval(counter);
        } 
    },duration);
});