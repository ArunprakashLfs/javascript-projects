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

//function
function addValue(){
    detailsObject()
    outputEl.innerHTML ="";
    arrayValue.forEach((list) => {
        let {name, task, time} = list;
        
    })
}
function detailsObject(){
    let tasklist={
        id: uniqueid(),
        nameEl: nameEl.value,
        taskEl: taskEl.value,
        timeEl: timeEl.value,
    }
}




//add EventListners
formEl.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(nameEl.value);
    console.log(taskEl.value);
    console.log(timeEl.value);
    addValue();
})


