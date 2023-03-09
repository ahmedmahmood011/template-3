let stats = document.getElementById("stats");
let numbers = document.querySelectorAll(".stats .box .number");
let startedStats = false;

let ourSkills = document.getElementById("our-skills");
let skills = document.querySelectorAll(".our-skills .skills .skill .value span");
let startedSkills = false;

window.onscroll = ()=>{
    if (window.scrollY >= stats.offsetTop) {
        if (!startedStats) {
            numbers.forEach((el)=>{ numCount(el)})
        }
        startedStats = true
    }
    if (window.scrollY >= ourSkills.offsetTop) {
        if (!startedSkills) {
            skills.forEach((el)=>{ numWidth(el) })
        }
        startedSkills = true
    }
}
function numCount(el){
    let data = el.dataset.num;
    let clear = setInterval(() => {
        el.textContent++
        if (el.textContent == data) {
            clearInterval(clear)
        }
    }, 2000 / data);
}
function numWidth(el){
    let data = el.parentElement.dataset.skills;
    let w = 0;
    let clear = setInterval(() => {
        el.style.width = `${w}%`
        w ++ ;
        if (el.style.width == data) {
            clearInterval(clear)
        }
    }, 5000 / data);
}




let countDownDate = new Date("May 5, 2023 3:37:25").getTime();
let x = setInterval(function() {

let now = new Date().getTime();
let distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);
document.querySelector(".days").innerHTML = days;
document.querySelector(".hours").innerHTML = hours;
document.querySelector(".minutes").innerHTML = minutes;
document.querySelector(".seconds").innerHTML = seconds;
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);
