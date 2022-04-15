function createDivWithClass(classes){
    let div = document.createElement('div')
    return div.classList.add(classes)
}

export async function setBestMovies(targetUrl, filmCount) {
    let listResults = [];
    let i = 1;
    filmCount ++;
    while (listResults.length < filmCount){
        let url = targetUrl + i;
        let response = await fetch(url);
        let data = await response.json();
        let results = data.results
        listResults = listResults.concat( results);
        i ++;
    }           

    const bestMovie = document.getElementById("best-movie");
    const bestMovieRate = Number(listResults[0].imdb_score);
    document.getElementById("best-movie-button").dataset.movieid = listResults[0].id
    
    document.getElementById("best-movie-title").innerHTML = listResults[0].title;
    document.getElementById("best-movie-director").innerHTML += listResults[0].directors.join(", ");
    document.getElementById("best-movie-note").innerHTML = [bestMovieRate,"/10"].join("");
    document.getElementById("best-movie-rate").style.width = [bestMovieRate*10,"px"].join("");
    bestMovie.style.background = "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), center / cover no-repeat url('" + listResults[0].image_url + "')"
;

    let bestMovies = document.querySelector('.best-movies')
    for (let i = 1; i < filmCount; i++){
        let item = document.createElement('div');
        item.classList.add('item', 'movie-button');
        bestMovies.appendChild(item);

        let itemImage = document.createElement('div');
        itemImage.classList.add('item_image');
        item.appendChild(itemImage);

        let itemBody = document.createElement('div');
        itemBody.classList.add('item_body', 'hide');
        item.appendChild(itemBody);

        let image = document.createElement('img');
        itemImage.appendChild(image);

        image.src = listResults[i].image_url;
        itemBody.innerHTML = '<h3>' + listResults[i].title + '</h3>'
        item.dataset.movieid = listResults[i].id
        
    }
    // return listResults;
}


export async function setCategoryMovies(targetUrl, filmCount, genre, divClass) {
    let listResults = [];
    let page = 1;
    while (listResults.length < filmCount){
        let url = [targetUrl, page, '&genre=', genre].join('');
        let response = await fetch(url);
        let data = await response.json();
        let results = data.results
        listResults = listResults.concat( results);
        page ++;
    }           

    let bestMovies = document.querySelector('.' + divClass)
    for (let i = 1; i <= filmCount; i++){
        let item = document.createElement('div');
        item.classList.add('item', 'movie-button');
        bestMovies.appendChild(item);

        let itemImage = document.createElement('div');
        itemImage.classList.add('item_image');
        item.appendChild(itemImage);

        let itemBody = document.createElement('div');
        itemBody.classList.add('item_body', 'hide');
        item.appendChild(itemBody);

        let image = document.createElement('img');
        itemImage.appendChild(image);

        image.src = listResults[i].image_url;
        itemBody.innerHTML = '<h3>' + listResults[i].title + '</h3>'
        item.dataset.movieid = listResults[i].id
        
    }
    return bestMovies;
}
