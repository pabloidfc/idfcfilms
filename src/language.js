let headerSubtitleText;
let headerSearchBarPlaceholderText;
let trendingTitleText;
let trendingSeeMoreBtnText;
let categoriesSectionTitleText;

function loadTextsInSpanish() {
    lang = "es";

    headerSubtitleText = "encuentra tus películas favoritas aquí!"
    headerSearchBarPlaceholderText = "Vengadores..."
    trendingTitleText = "Películas en tendencia";
    trendingSeeMoreBtnText = "Ver más";
    categoriesSectionTitleText = "Categorias";
}

function loadTextsInEnglish() {
    lang = "en";

    headerSubtitleText = "find your favorite movies here!";
    headerSearchBarPlaceholderText = "Avengers..."
    trendingTitleText = "Trending movies";
    trendingSeeMoreBtnText = "See more";
    categoriesSectionTitleText = "Categories";
}

function loadLanguage() {
    headerSubtitle.innerHTML = headerSubtitleText;
    headerSearchBar.placeholder = headerSearchBarPlaceholderText;
    trendingTitle.innerHTML = trendingTitleText;
    trendingSeeMoreBtn.innerHTML = trendingSeeMoreBtnText;
    categoriesSectionTitle.innerHTML = categoriesSectionTitleText;
}