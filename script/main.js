// Get API

// const TMDB_API_KEY_POPULAR_MOVIES = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
// const TMDB_API_KEY_TRENDING_MOVIES = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

// Get elements

// let imgCardTrendingM = document.querySelector("#img-card-trending");
// let imgCardPopularM = document.querySelector("#img-card-popular");

// let labelCardTrending = document.querySelector("#label-card-trending");
// let labelCardPopular = document.querySelector("#label-card-popular");

let imgCardPopular = document.querySelectorAll("#img-card-popular");
let labelCardPopular = document.querySelectorAll("#label-card-popular");

let movieList = document.querySelector(".card-list");

// Display The API

async function movie() {
  const request =
    await "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  const movies = await request.json();
  console.log(movies);
  makeMoviesCard(movies);
}

// Function Make Movie Card

function makeMoviesCard(movies) {
  for (let movie of movies) {
    let imageMovieSrc = movie.show.image.medium;
    let labelMovieText = movie.show.text.medium;

    imgCardPopular.src = imageMovieSrc;
    labelCardPopular.text = labelMovieText;

    // movieList.appendChild(imageMovieCard);
    // movieList.appendChild(labelMovieCard);
  }
}
