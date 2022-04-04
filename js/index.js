import setBestMovies from './app.js';
import './scroll.js';
import './modal.js';

const baseUrl = "http://localhost:8000/api/v1/";
const filmCount = 7;

const urlBestMovie = baseUrl + "titles/?sort_by=-imdb_score&page=";

setBestMovies(urlBestMovie, filmCount)
.then(function(data){
    let movies = data;
    console.log(movies);
    
});

let carouselItems = document.querySelectorAll('.carousel_item')
console.log(carouselItems)

carouselItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('.item_body').classList.remove("hide")
        // item.classList.add("hide");
    });
    item.addEventListener('mouseleave', () => {
        item.querySelector('.item_body').classList.add("hide")
        // item.classList.remove("hide")
    });
})
