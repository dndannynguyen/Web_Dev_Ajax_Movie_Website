$(document).ready(function res() {
    $.ajax({
        url: "https://yts.mx/api/v2/movie_details.json?movie_id=49404",
        type: "GET",
        success: function (res) {
            console.log(res);
            $("main").append(
                `<div class="movie">
                <img src="${res.data.movie.medium_cover_image}" alt="$(res.data.movie.title)"
                </div>
                <div class="info">
                <h3>${res.data.movie.title}</h3>
                <p><b>Year: </b><span>${res.data.movie.year}</span></p>
                <p><b>Description: </b><span>${res.data.movie.description_full}</span></p>
                <p><b>Genre: </b><span>${res.data.movie.genres}</span></p>
                <p><b>Rating: </b><span>${res.data.movie.rating}</span></p>
                <p><b>Runtime: </b><span>${res.data.movie.runtime}</span></p>
                <p><b>Language: </b><span>${res.data.movie.language}</span></p>
                </div>`
            )
            }
        })
})