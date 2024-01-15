const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

setInterval (()=> {
    let day = new Date();
    let hh = day.getHours()*30;
    let mm = day.getMinutes()*6;
    let ss = day.getSeconds()*6;

    hour.style.transform = `rotateZ(${hh+mm/12}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
},1000)

const body = document.querySelector("body");
const button = document.querySelector(".switch-btn");
const clock = document.querySelector(".clock");
const pageHead = document.querySelector('.page-head');

button.addEventListener('click',(e)=>{
    if(e.target.id === '#1e1f26'){  // dark
        body.style.backgroundColor = e.target.id;
        clock.style.backgroundColor = e.target.id;
        e.target.id = "#ccc";
        button.style.backgroundColor = "#ccc";
        button.style.color = "#1e1f26";
        button.innerHTML = "LIGHT";
        pageHead.style.color = e.target.id;  
    }
    else {  // Light
        body.style.backgroundColor = e.target.id;
        clock.style.backgroundColor = e.target.id;
        e.target.id = '#1e1f26';
        button.style.backgroundColor = '#888888';
        button.style.color = '#ccc'
        button.innerHTML = "DARK";
        pageHead.style.color = "#888888";
        
    } 
},false)