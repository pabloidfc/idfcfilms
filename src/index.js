document.addEventListener("DOMContentLoaded", () => {
    loadTextsInEnglish();
    loadLanguage();
    navigator();
});

window.addEventListener("hashchange", navigator);
trendingSeeMoreBtn.addEventListener("click", () => {
    location.hash = "#trends";
});
headerTitle.addEventListener("click", () => {
    location.hash = "#home";
});
headerSearchBarBtn.addEventListener("click", (e) => {
    e.preventDefault();
    location.hash = "$search=" + headerSearchBar.value;
});