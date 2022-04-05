import setBestMovies from './app.js';
import './scroll.js';
import Modal from './modal.js';
import Carousel from './carousel.js';

const baseUrl = "http://localhost:8000/api/v1/";
const filmCount = 7;

const urlBestMovie = baseUrl + "titles/?sort_by=-imdb_score&page=";

setBestMovies(urlBestMovie, filmCount)
.then(function(){
    new Carousel(document.querySelector('.best-movies'), {
        slidesToScroll: 3,
        slidesVisible: 4,
        loop: false
    })}
).then(function(){
    new Modal("myModal", "movie-button", baseUrl + "titles/")
}).then(function(){
    let carouselItems = document.querySelectorAll('.carousel_item')
    console.log(carouselItems)
    
    carouselItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('.item_body').classList.remove("hide")
        });
        item.addEventListener('mouseleave', () => {
            item.querySelector('.item_body').classList.add("hide")
        });
    })
})

