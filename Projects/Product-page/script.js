let img = document.getElementById("productImg")
let btn = document.getElementsByClassName("btn")
// let back = document.getElementsByClassName("images")
const back = document.querySelector(".images")

for(let j=0; j<3; j++){
    btn[j].onclick = ()=>{
        img.src =`./image${j+1}.webp`;
        // now change the class name active and paste the property in which button click
        for(bt of btn){
            bt.classList.remove("active");
        }
        this.classList.add.add("active")
    }
}
