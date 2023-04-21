const IMAGE_URL_300 = "https://image.tmdb.org/t/p/w300/";
const IMAGE_URL_500 = "https://image.tmdb.org/t/p/w500/";
let lang = "en";

const headerSubtitle = document.querySelector(".header__subtitle");
const headerSearchBarContainer = document.querySelector(".search-bar-section");
const headerSearchBar = document.querySelector(".search-bar-section__search-bar");

const trendingSectionContainer = document.querySelector("#trending-section");
const trendingTitle = document.querySelector(".trending-section__title");
const trendingMoviesPreviewContainer = document.querySelector(".trending-section__preview");
const trendingSeeMoreBtn = document.querySelector(".trending-section__btn");

const categoriesSectionContainer = document.querySelector("#categories-section");
const categoriesSectionTitle = document.querySelector(".categories-section__title");

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
      'Content-Type': "application/json;charset=utf-8",
    },
    params: {
      'api_key': KEY,
      'language': lang
    },
});

function printMoviesInContainer(movies, container, clean = false) {
  const moviesFragment = new DocumentFragment();

  if (clean) container.innerHTML = "";

  for (const movie of movies) {
    const moviesContainer = document.createElement("div");
    moviesContainer.classList.add("movies-container");

    const movieImage = document.createElement("img");
    movieImage.classList.add("movies-container__movie");
    movieImage.setAttribute("src", IMAGE_URL_300 + movie.poster_path);
    movieImage.setAttribute("alt", movie.title);

    const movieDescriptionContainer = document.createElement("div");
    movieDescriptionContainer.classList.add("movies-container__desc");

    const movieTitle = document.createElement("div");
    movieTitle.classList.add("movies-container__title");
    movieTitle.innerHTML = movie.title;
    
    const movieScore = document.createElement("div");
    movieScore.classList.add("movies-container__score");
    movieScore.innerHTML = movie.vote_average.toFixed(1);

    movieDescriptionContainer.appendChild(movieTitle);
    movieDescriptionContainer.appendChild(movieScore);
    moviesContainer.appendChild(movieImage);
    moviesContainer.appendChild(movieDescriptionContainer);

    moviesFragment.appendChild(moviesContainer);
  }

  container.appendChild(moviesFragment);
}

async function getTrendingMoviesPreview() {
    const { data } = await api('trending/movie/day');
    const movies = data.results;
    return movies;
}