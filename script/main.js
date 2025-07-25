// Get API
const api_key = "0506601f30e5459212136df9e64d55b5";
let apiKeyPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
let apiKeyTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`;
let apiKeyUpcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`;
let apiKeyImg = "https://image.tmdb.org/t/p/w200";

let movieListPopular = document.querySelector(".card-list-popular");
let movieListTopRated = document.querySelector(".card-list-top-rated");
let movieListTrending = document.querySelector(".card-list-trending");

// Display The API

// Popular Movie List

fetch(apiKeyPopular)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.results);

    for (let i in data.results) {
      let cardMoviePopular = document.createElement("div");

      let labelMoviePopular = document.createElement("p");
      let imgMoviePopular = document.createElement("img");

      labelMoviePopular.innerHTML = data.results[i].title;
      imgMoviePopular.src = apiKeyImg + data.results[i].poster_path + api_key;

      movieListPopular.appendChild(cardMoviePopular);

      cardMoviePopular.appendChild(imgMoviePopular);
      cardMoviePopular.appendChild(labelMoviePopular);

      labelMoviePopular.style.color = "white";
      imgMoviePopular.style.borderRadius = "15px";
      
      imgMoviePopular.addEventListener("mouseover", () => {
        imgMoviePopular.style.zoom = "110%";
      });
      imgMoviePopular.addEventListener("mouseout", () => {
        imgMoviePopular.style.zoom = "0";
      });

      movieListPopular.style.display = "flex";
      movieListPopular.style.gap = "20px";

      // Get API ID

      cardMoviePopular.addEventListener("click", () => {
        let apiMovieId = data.results[i].id;
        localStorage.setItem("Id", apiMovieId);
        console.log(apiMovieId);

        window.location.href = "movie-overview.html"
      })
    }
  });

  
// Top Rated Movie List

fetch(apiKeyTopRated)
  .then((res) => res.json())
  .then((data) => {

    console.log(data.results);
    
    for (let i in data.results) {
      let cardMovieTopRated = document.createElement("div");

      let labelMovieTopRated = document.createElement("p");
      let imgMovieTopRated = document.createElement("img");

      labelMovieTopRated.innerHTML = data.results[i].title;
      imgMovieTopRated.src = apiKeyImg + data.results[i].poster_path + api_key;

      movieListTopRated.appendChild(cardMovieTopRated);

      cardMovieTopRated.appendChild(imgMovieTopRated);
      cardMovieTopRated.appendChild(labelMovieTopRated);
      
      labelMovieTopRated.style.color = "white";
      imgMovieTopRated.style.borderRadius = "15px";
      imgMovieTopRated.addEventListener ("mouseover", () => {
        imgMovieTopRated.style.zoom = "110%";
      })
      imgMovieTopRated.addEventListener ("mouseout", () => {
        imgMovieTopRated.style.zoom = "0";
      })
      
      movieListTopRated.style.display = "flex";
      movieListTopRated.style.gap = "20px";
      movieListTopRated.style.marginBottom = "20px";

      // Get API ID

      cardMovieTopRated.addEventListener("click", () => {
        let apiMovieId = data.results[i].id;
        localStorage.setItem("Id", apiMovieId);
        console.log(apiMovieId);

        window.location.href = "movie-overview.html"
      })

    }
  });


// Upcoming Movie List

fetch(apiKeyUpcoming)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.results);

    for (let i in data.results) {
      let cardMovieUpcoming = document.createElement("div");

      let labelMovieTrending = document.createElement("p");
      let imgMovieTrending = document.createElement("img");

      labelMovieTrending.innerHTML = data.results[i].title;
      imgMovieTrending.src = apiKeyImg + data.results[i].poster_path + api_key;

      movieListTrending.appendChild(cardMovieUpcoming);

      cardMovieUpcoming.appendChild(imgMovieTrending);
      cardMovieUpcoming.appendChild(labelMovieTrending);

      labelMovieTrending.style.color = "white";
      imgMovieTrending.style.borderRadius = "15px";
      imgMovieTrending.addEventListener("mouseover", () => {
        imgMoviePopular.style.zoom = "110%";
      });
      imgMovieTrending.addEventListener("mouseout", () => {
        imgMoviePopular.style.zoom = "0";
      });

      movieListTrending.style.display = "flex";
      movieListTrending.style.gap = "20px";

      // Get API ID

      cardMovieUpcoming.addEventListener("click", () => {
        let apiMovieId = data.results[i].id;
        localStorage.setItem("Id", apiMovieId);
        console.log(apiMovieId);

        window.location.href = "movie-overview.html"
      })
    }
  });