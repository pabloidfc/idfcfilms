let lang = "en";

const headerSubtitle = document.querySelector(".header__subtitle");
const headerSearchBarContainer = document.querySelector(".search-bar-section");
const headerSearchBar = document.querySelector(".search-bar-section__search-bar");

const trendingSectionContainer = document.querySelector("#trending-section");
const trendingTitle = document.querySelector(".trending-section__title");
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

async function getTrendingMoviesPreview() {
    const { data } = await api('trending/movie/day');
    const movies = data.results;
    return movies;
}