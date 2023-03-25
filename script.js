'use strict'
//Getting input from user
const nameEl = document.getElementById("input-Name");
const taskEl = document.getElementById("input-task");
const timeEl = document.getElementById("input-time");
const formEl = document.getElementById("form");

//displaying output 
const outputEl = document.getElementById("task-items");





//add EventListners
formEl.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(nameEl.value);
    console.log(taskEl.value);
    console.log(timeEl.value);
})


