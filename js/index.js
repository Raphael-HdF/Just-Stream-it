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

async function setPage(urlBestMovie, filmCount, carrouselSettings){
    let bestMovies = setBestMovies(urlBestMovie, filmCount)
    let carousel1 = new Carousel(await bestMovies, carrouselSettings)
    
    let comedyMovies = setCategoryMovies(urlBestMovie, filmCount, "comedy", "comedy-movies")
    let carousel2 = new Carousel(await comedyMovies, carrouselSettings)
    
    let romanceMovies = setCategoryMovies(urlBestMovie, filmCount, "romance", "romance-movies")
    let carousel3 = new Carousel(await romanceMovies, carrouselSettings)

    setModal()
    hoverOnCards()
}

setPage(urlBestMovie, filmCount, carrouselSettings)
