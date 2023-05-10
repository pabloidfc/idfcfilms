let headerSubtitleText;
let headerSearchBarPlaceholderText;
let trendingTitleText;
let trendingSeeMoreBtnText;
let categoriesSectionTitleText;
let searchByQuerySectionTitleText;

function loadTextsInSpanish() {
    lang = "es";

    headerSubtitleText = "encuentra tus películas favoritas aquí!"
    headerSearchBarPlaceholderText = "Vengadores..."
    trendingTitleText = "Películas en tendencia";
    trendingSeeMoreBtnText = "Ver más";
    categoriesSectionTitleText = "Categorias";
    searchByQuerySectionTitleText = "Resultados de la búsqueda";
    
}

function loadTextsInEnglish() {
    lang = "en";
    
    headerSubtitleText = "find your favorite movies here!";
    headerSearchBarPlaceholderText = "Avengers..."
    trendingTitleText = "Trending movies";
    trendingSeeMoreBtnText = "See more";
    categoriesSectionTitleText = "Categories";
    searchByQuerySectionTitleText = "Search results";
}

function loadLanguage() {
    headerSubtitle.innerHTML = headerSubtitleText;
    headerSearchBar.placeholder = headerSearchBarPlaceholderText;
    trendingTitle.innerHTML = trendingTitleText;
    trendingSeeMoreBtn.innerHTML = trendingSeeMoreBtnText;
    categoriesSectionTitle.innerHTML = categoriesSectionTitleText;
}