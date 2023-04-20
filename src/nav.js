function loadHomepage() {
    headerSearchBarContainer.classList.remove("d-none");
    trendingSectionContainer.classList.remove("d-none");
    categoriesSectionContainer.classList.remove("d-none");
}

function loadTrendsPage() {
    headerSearchBarContainer.classList.add("d-none");
    trendingSectionContainer.classList.add("d-none");
    categoriesSectionContainer.classList.add("d-none");
}

function loadMoviePage() {
    headerSearchBarContainer.classList.add("d-none");
    trendingSectionContainer.classList.add("d-none");
    categoriesSectionContainer.classList.add("d-none");
}

function loadSearchPage() {
    headerSearchBarContainer.classList.add("d-none");
    trendingSectionContainer.classList.add("d-none");
    categoriesSectionContainer.classList.add("d-none");
}

function loadCategoryPage() {
    headerSearchBarContainer.classList.add("d-none");
    trendingSectionContainer.classList.add("d-none");
    categoriesSectionContainer.classList.add("d-none");
}

function navigator() {
    scrollTo(0, 0);

    const sections = {
        "#trends":     () => loadTrendsPage(),
        "#movie=":     () => loadMoviePage(),
        "#search=":    () => loadSearchPage(),
        "#category=":  () => loadCategoryPage()
    }

    for (const key in sections) {
        if(location.hash.startsWith(key)) {
            sections[key]();
            return;
        }
    }

    loadHomepage();
}