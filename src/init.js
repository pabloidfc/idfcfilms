let lang = "en";
const IMAGE_URL_300 = "https://image.tmdb.org/t/p/w300/";
const IMAGE_URL_500 = "https://image.tmdb.org/t/p/w500/";

const headerTitle = document.querySelector(".header__title");
const headerSubtitle = document.querySelector(".header__subtitle");
const headerSearchBarContainer = document.querySelector(".search-bar-section");
const headerSearchBar = document.querySelector(".search-bar-section__search-bar");
const headerSearchBarBtn = document.querySelector(".search-bar-section__btn");

const trendingSectionContainer = document.querySelector("#trending-section");
const trendingTitle = document.querySelector(".trending-section__title");
const trendingMoviesPreviewContainer = document.querySelector(".trending-section__preview");
const trendingSeeMoreBtn = document.querySelector(".trending-section__btn");

const categoriesSectionContainer = document.querySelector("#categories-section");
const categoriesSectionTitle = document.querySelector(".categories-preview__title");
const categoriesSectionPreviewContainer = document.querySelector(".categories-preview__container");

const genericSectionContainer = document.querySelector("#generic-section");
const genericSectionContentContainer = document.querySelector(".generic-section__content");
const genericSectionTitle = document.querySelector(".generic-section__title");

let api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        'Content-Type': "application/json;charset=utf-8",
    },
    params: {
        'api_key': KEY,
        'language': lang,
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

function printCategoriesInContainer(categories, container, clean = false) {
    const categoriesFragment = new DocumentFragment();

    if (clean) container.innerHTML = "";

    for (const category of categories) {
        const categoryContainer = document.createElement("button");
        categoryContainer.addEventListener("click", (e) => {
            location.hash = "#category=" + e.target.id;
        });
        categoryContainer.setAttribute("id", category.id + "-" + category.name );
        categoryContainer.classList.add("categories-preview__category");
        categoryContainer.innerHTML = category.name;
        categoriesFragment.appendChild(categoryContainer);
    }

    container.appendChild(categoriesFragment);
}

async function getTrendingMovies() {
    const { data } = await api('trending/movie/day', {
        params: {
            'language': lang,
        }
    });
    const movies = data.results;
    return movies;
}

async function getTrendingMoviesPreview() {
    const { data } = await api('trending/movie/day', {
        params: {
            'language': lang
        }
    });
    const movies = data.results;
    return movies;
}

async function getCategoriesPreview() {
    const { data } = await api('genre/movie/list', {
        params: {
            'language': lang
        }
    });
    const categories = data.genres;
    return categories;
}

async function getMoviesByCategoryID(id) {
    const { data } = await api('discover/movie', {
        params: {
          "with_genres": id,
          'language': lang
        },
    });
    const movies = data.results;
    return movies;
}

async function getMoviesBySearch(query) {
    const { data } = await api("search/movie", {
        params: {
            "query": query,
            'language': lang
          },
    });
    const movies = data.results;
    return movies;
}