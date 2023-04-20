let headerSubtitleText = "find your favorite movies here!";
let headerSearchBarPlaceholderText = "Avengers...";
let trendingTitleText = "Trending movies";

function loadTextsInSpanish() {
    headerSubtitleText = "encuentra tus películas favoritas aquí!"
    headerSearchBarPlaceholderText = "Vengadores..."
    trendingTitleText = "Películas en tendencia";
}

function loadTextsInEnglish() {
    headerSubtitleText = "find your favorite movies here!";
    headerSearchBarPlaceholderText = "Avengers..."
    trendingTitleText = "Trending movies";
}

function loadLanguage() {
    headerSubtitle.innerHTML = headerSubtitleText;
    headerSearchBar.placeholder = headerSearchBarPlaceholderText;
    trendingTitle.innerHTML = trendingTitleText;
}