const slidepaginate = document.querySelector(".carousel-indicators")
const slidecontent = document.querySelector(".carousel-inner")

document.addEventListener("DOMContentLoaded", () => {
    loadDataNew();
});
async function load_fromPlaceHolder_new() {
    //open the request 
    let response = await fetch('https://picsum.photos/v2/list');
    let data = await response.json();
    return data;
}

function loadDataNew() {
    load_fromPlaceHolder_new().then(function(posts) {
            //iterate over each post [100 posts]
            console.log(posts);
            let x = 3;
            let output = document.createElement("div");
            let output2 = document.createElement("div");
            posts.forEach(function(post) {
                output2.innerHTML = `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${x}" aria-label="Slide ${x + 1}"></button>`
                output.innerHTML =  `<div class="carousel-item">
                <img src="${post.download_url}" class="d-block w-100" alt="...">
              </div>`;
              console.log(post.download_url)
              console.log("hoeij")
              x +=1
            slidepaginate.appendChild(output2)
            slidecontent.appendChild(output)
            });
        }).catch(function(err) {
            console.log(err);
        });
}