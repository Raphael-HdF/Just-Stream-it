

export default async function setBestMovies(targetUrl, filmCount) {
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
    
    const newImage = listResults[0].image_url;
    bestMovie.style.backgroundImage = "url('" + newImage + "')"
    return listResults;
}