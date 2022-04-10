import {setBestMovies, setCategoryMovies} from './app.js';
import './scroll.js';
import Modal from './modal.js';
import Carousel from './carousel.js';
import hoverOnCards from './events.js'

const baseUrl = "http://localhost:8000/api/v1/";
const filmCount = 7;

const urlBestMovie = baseUrl + "titles/?sort_by=-imdb_score&page=";
const urlMovies = baseUrl + "titles/?";
const carrouselSettings = {
    slidesToScroll: 3,
    slidesVisible: 4,
    loop: false
};

function setModal() {
    new Modal("myModal", "movie-button", baseUrl + "titles/")
}

setBestMovies(urlBestMovie, filmCount)
.then(function(){
    new Carousel(document.querySelector('.best-movies'), carrouselSettings)})
.then(setModal())
.then(hover => hoverOnCards())

setCategoryMovies(urlBestMovie, filmCount, "comedy", "comedy-movies")
.then(item => {
    new Carousel(item, carrouselSettings)})
.then(setModal())
.then(hover => hoverOnCards())


setCategoryMovies(urlBestMovie, filmCount, "romance", "romance-movies")
.then(item => {
    new Carousel(item, carrouselSettings)})
.then(setModal())
.then(hover => hoverOnCards())



