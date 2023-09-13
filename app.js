console.log("Let's get this party started!");


const input = document.querySelector('#input-search-term');
const submitInput = document.querySelector('#click-search');
const form = document.querySelector('form');
const removeButton = document.querySelector('#remove-all');


form.addEventListener('submit', async function(e){
    e.preventDefault();
    let searchTerm = input.value;
    searchGif(searchTerm);
});

async function searchGif(searchTerm){
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", 
    {params: {
        q: searchTerm,
        api_key: '26jlDjJfVhLgcW2phktxpeqZqP0DCprg'}});
    
    console.log(searchTerm)   

    let numResults = response.data.data.length;
    if(numResults){
        let randomIdx = Math.floor(Math.random()*numResults);
        const imgContainer = document.querySelector('#image-container');
        const imgEl = document.createElement('img');
        imgEl.Id = "image-element"
        imgEl.src = response.data.data[randomIdx].images.original.url;
        imgContainer.appendChild(imgEl);
}};

removeButton.addEventListener('click',function(e){
    e.preventDefault();
    const imagesToRemove = document.querySelectorAll('img');
    imagesToRemove.forEach(function(img){
        img.remove();
    })
})