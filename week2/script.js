"use strict"

function input() {

    let tmp = document.getElementById("input").value;
    tmp = tmp + (this.value);
    document.getElementById("input").value = tmp;

}

function erase() {

    if (this.id == "backspace") {

        let tmp = document.getElementById("input").value; 
        tmp = tmp.substr(0, tmp.length-1); 
        document.getElementById("input").value = tmp;     
    } 
    
    else {
        document.getElementById("input").value = "";
        document.getElementById("output").value = ""; 
    }

}


function cal() {

    let fomular = document.getElementById("input").value;
    let result = eval(fomular);
    document.getElementById("output").value = result;

}

let calbtn = document.getElementsByClassName("cal-btn");
let erasebtn = document.getElementsByClassName("cal-erase");
let equalbtn = document.getElementById("equal");
for (let i = 0; i < calbtn.length; i++) {

    calbtn[i].addEventListener('click', input);
};

for (let i = 0; i < erasebtn.length; i++) {
    erasebtn[i].addEventListener('click', erase);
};

equalbtn.addEventListener('click', cal);