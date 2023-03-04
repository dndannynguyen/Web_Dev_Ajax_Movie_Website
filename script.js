


$(document).ready(function () {
    $.ajax({
        url: "https://yts.mx/api/v2/list_movies.json?sort_by=date_added",

        success: function (res) {
            // console.log(res);
            res.data.movies.forEach(function (movie) {
                // console.log(movie.title);
                $("main").append(
                    `<div class="movie">
                    <a href="movie_${movie.id}.html"><img src="${movie.medium_cover_image}" alt="${movie.title}">
                    <h3>${movie.title}</h3>
                    <p>${movie.year}</p>
                    </div>`
                    );

            });
        }
    });
});