let headerSubtitleText = "find your favorite movies here!";
let headerSearchBarPlaceholderText = "Avengers...";
let trendingTitleText = "Trending movies";
let trendingSeeMoreBtnText = "See more";
let categoriesSectionTitleText = "Categories";

function loadTextsInSpanish() {
    headerSubtitleText = "encuentra tus películas favoritas aquí!"
    headerSearchBarPlaceholderText = "Vengadores..."
    trendingTitleText = "Películas en tendencia";
    trendingSeeMoreBtnText = "Ver más";
    categoriesSectionTitleText = "Categorias";
}

function loadTextsInEnglish() {
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