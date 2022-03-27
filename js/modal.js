// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var buttons = document.getElementById("myBtn");
// var buttons = document.getElementsByTagName("button");

// for( var x=0; x < buttons.length; x++ ) {

//     buttons[x].onclick = function(){
//           modal.style.display = "block";
//           // alert('entered');
//           // document.getElementById("demo").innerHTML="test";
//         };
//  }

function showModal(id) {
    setModalMovie(id);
    async function setModalMovie(id) {
        console.log(id);
        let modal = document.getElementById("myModal");
        let url = ["http://localhost:8000/api/v1/titles/", id].join('');
        let response = await fetch(url);
        let results = await response.json();
        console.log(results);
        document.getElementById("movie-title").innerHTML = results.title;
        document.getElementById("movie-genres").innerHTML = results.genres.join(", ");
        document.getElementById("movie-year").innerHTML = results.year;
        let duration = [Math.floor(results.duration / 60), 'h', results.duration % 60, 'm'].join('');
        document.getElementById("movie-duration").innerHTML = duration;
        const movieRate = Number(results.imdb_score);
        document.getElementById("movie-note").innerHTML = [movieRate, "/10"].join("");
        document.getElementById("movie-rate").style.width = [movieRate * 10, "px"].join("");
        document.getElementById("movie-vote").innerHTML = results.vote;
        document.getElementById("movie-directors").innerHTML = results.directors.join(", ");
        document.getElementById("movie-writers").innerHTML = results.writers.join(", ");
        document.getElementById("movie-actors").innerHTML = results.actors.join(", ");
        document.getElementById("movie-description").innerHTML = results.long_description;
        modal.style.display = "block";
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}