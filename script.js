

const accesskey = "rPoDgzt9brsJuE9JoHfR46RW3e9AicwlXau978j-58s";

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchInput.values;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResults.appendChild(imageLink);
    })
    showMoreBtn.style.display ="block";
}
searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page=1;
    searchImages();
});
showMoreBtn.addEventListener("click", ()=>
{
    page++;
    searchImages();
});