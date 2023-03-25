'use strict'
//Getting input from user
const nameEl = document.getElementById("input-Name");
const taskEl = document.getElementById("input-task");
const timeEl = document.getElementById("input-time");
const formEl = document.getElementById("form");

//displaying output 
const outputEl = document.getElementById("task-items");

//create an array for storage
let arrayValue = [];
console.log(arrayValue);

//function
function addValue(){
    outputEl.innerHTML ="";
    arrayValue.forEach((tasklist) => {
        let {nameEl, taskEl, timeEl} = tasklist;
        outputEl.innerHTML= `
        <span>${nameEl}</span>
        <span>${taskEl}</span>
        <span>${timeEl}</span>
        <button onclick="deletevalue(${tasklist.id})">delete</button>
        <button onclick ="editValue(${tasklist.id})">edit</button>
        `

        
    });
}
function detailsObject(){
    if(nameEl.value ==""||taskEl.value=="" ||timeEl == ""){
        alert("EnterValue")
    }else{ let tasklist={
        id: uniqueid(),
        nameEl: nameEl.value,
        taskEl: taskEl.value,
        timeEl: timeEl.value,
    }
    arrayValue.push(tasklist);
    addValue();

    }
   
    // addValue(tasklist);
}
function uniqueid() {
    return Math.floor(Math.random()*100000);
}




//add EventListners
formEl.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(nameEl.value);
    console.log(taskEl.value);
    console.log(timeEl.value);
   
    detailsObject();
})


