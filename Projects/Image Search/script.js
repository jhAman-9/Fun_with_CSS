const accesskey = "-JjSC95Dw2Cu3ZapQvduYLRlMdZJ6N3g2EwZRO-oJkQ"
const search_form = document.querySelector("#search_form")
const search_box = document.querySelector("#search_box")
const search_result= document.querySelector("#search_result")
const show_more = document.querySelector("#show_more") 

let keyword = "";
let page = 1;

async function searchImage(){
    keyword = search_box.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1) {
        search_result.innerHTML ="";
    }

    const results = data.results;
    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        search_result.appendChild(imageLink);
    })
    show_more.style.display = "block";
}



search_form.addEventListener("submit", (e)=>{
    e.preventDefault();
    page  = 1;
    searchImage();
})


show_more.addEventListener("click", ()=>{
    page++;
    searchImage();
})