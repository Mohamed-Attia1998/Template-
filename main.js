let Stats = document.querySelector(".stats")
let states = document.querySelectorAll(".state .num_state")
let our_skills = document.querySelector(".our-skills")
let spans = document.querySelectorAll(".prog span")
started = false


window.onscroll = function(){
    if(window.scrollY >= Stats.offsetTop ){
        if(!started){
            states.forEach((state)=> startCount(state))
        }
        started = true
    }
    if(window.scrollY >= our_skills.offsetTop){
        spans.forEach((span)=>{
            span.style.width = span.dataset.width 
        })
    }
}

function startCount(ele){
let goal = ele.dataset.goal;
let count = setInterval(() =>{
ele.textContent++;
if(ele.textContent == goal){
    clearInterval(count)
}
},1500 / goal)
}

// set date time
let days_Date = document.querySelector(".days_Date")
let hours_Date = document.querySelector(".hours_Date")
let minutes_Date = document.querySelector(".minutes_Date")
let seconds_Date = document.querySelector(".seconds_Date")

let countDown = new Date("Dec 31, 2023 23:59:59").getTime()
let counter = setInterval(()=>{
let dateNow = new Date().getTime()
let Diff = countDown - dateNow
let days = Math.floor(Diff / (1000*60*60*24))
days_Date.innerHTML = days
let hours = Math.floor((Diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
hours_Date.innerHTML = hours < 10 ?  `0${hours}` : hours
let minutes = Math.floor((Diff % (1000 * 60 * 60 )) / (1000 * 60 ))
minutes_Date.innerHTML = minutes < 10 ?  `0${minutes}` : minutes
let seconds = Math.floor((Diff % (1000 * 60  )) / 1000)
seconds_Date.innerHTML = seconds < 10 ?  `0${seconds}` : seconds
},1000)