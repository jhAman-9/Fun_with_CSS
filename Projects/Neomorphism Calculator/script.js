let buttons = document.querySelector(".button")
let body = document.querySelector("body")
let toggleBtn = document.querySelector(".toggleBtn");
const calculator = document.querySelector(".calculator")

// toggleBtn.addEventListener('click',()=>{
//     if(buttons.style.backgroundColor === '#edf1f4'){  // white
//         body.style.backgroundColor = '#edf1f4';
//         buttons.style.backgroundColor = '#1e1f26';
//         buttons.style.color = '#f1f4te';
//     }
//     else{
//         body.style.backgroundColor = '#1e1f26';
//         buttons.style.backgroundColor = 'edf1f4';
//         buttons.style.color = '#1e1f26';
//     }

// },true)

toggleBtn.onclick = ()=>{
    body.classList.toggle("dark");
}

let btn = document.querySelectorAll("span");
let value = document.getElementById("value");

// traversing for loop on btn 
for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click',()=>{
        if(btn[i].innerHTML == '='){
            value.innerHTML = eval(value.innerHTML);
        }

        else{
            if(btn[i].innerHTML == "Clear"){
                value.innerHTML = "";
            }
            else{
                value.innerHTML += btn[i].innerHTML;
            }
        }
    })
}