document.addEventListener("DOMContentLoaded", () => {
    loadLanguage();
    navigator();
});

window.addEventListener("hashchange", navigator);
trendingSeeMoreBtn.addEventListener("click", () => {
    location.hash = "#trends";
});