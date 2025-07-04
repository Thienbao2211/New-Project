// API

const api_key = "0506601f30e5459212136df9e64d55b5";
// let apiKeyId = `https://api.themoviedb.org/3/movie/{movie_id}/external_ids?api_key=${api_key}`;
let apiKeyMovieListTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`;
let apiKeyMovieListPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
let apiKeyImg = `https://image.tmdb.org/t/p/w300`;

// Get HTML Elements

let backgroundImg = document.querySelector(".background-image-movie-overview");
let posterImg = document.querySelector(".poster-movie-overview");
let titleMovie = document.querySelector(".title-movie-overview");
let labelMovie = document.querySelector(".label-movie-overview");

// Fetch API

fetch(apiKeyMovieListTopRated)
    .then((res) => res.json())
    .then((data) => {

        console.log(data.results);
        let apiKeyId = localStorage.getItem("Id");
        console.log(apiKeyId);
        
        for (let i in data.results) {
        };

    })