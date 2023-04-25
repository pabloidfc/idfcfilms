document.addEventListener("DOMContentLoaded", () => {
    loadTextsInEnglish();
    loadLanguage();
    navigator();
});

window.addEventListener("hashchange", navigator);
trendingSeeMoreBtn.addEventListener("click", () => {
    location.hash = "#trends";
});