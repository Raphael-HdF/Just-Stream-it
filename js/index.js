import setBestMovies from './app.js';
import './scroll.js'

const baseUrl = "http://localhost:8000/api/v1/"
const filmCount = 7;

const urlBestMovie = baseUrl + "titles/?sort_by=-imdb_score&page=";

setBestMovies(urlBestMovie, filmCount)
.then(function(data){
    let movies = data;
    console.log(movies);
    
});