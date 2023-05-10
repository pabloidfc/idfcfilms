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

async function loadHomepage() {
    headerSearchBarContainer.classList.remove("d-none");
    trendingSectionContainer.classList.remove("d-none");
    categoriesSectionContainer.classList.remove("d-none");

    genericSectionContainer.classList.add("d-none");

    const movies = await getTrendingMoviesPreview();
    const categories = await getCategoriesPreview();
    printMoviesInContainer(movies, trendingMoviesPreviewContainer, true);
    printCategoriesInContainer(categories, categoriesSectionPreviewContainer, true);
}

async function loadTrendsPage() {
    genericSectionContainer.classList.remove("d-none");

    headerSearchBarContainer.classList.add("d-none");
    trendingSectionContainer.classList.add("d-none");
    categoriesSectionContainer.classList.add("d-none");

    genericSectionTitle.innerHTML = trendingTitleText;
    const movies = await getTrendingMovies();
    printMoviesInContainer(movies, genericSectionContentContainer, true);
}

function loadMoviePage() {
    headerSearchBarContainer.classList.add("d-none");
    trendingSectionContainer.classList.add("d-none");
    categoriesSectionContainer.classList.add("d-none");
    genericSectionContainer.classList.add("d-none");
}

function loadSearchPage() {
    genericSectionContainer.classList.remove("d-none");
    
    headerSearchBarContainer.classList.add("d-none");
    trendingSectionContainer.classList.add("d-none");
    categoriesSectionContainer.classList.add("d-none");    
}

async function loadCategoryPage() {
    genericSectionContainer.classList.remove("d-none");

    headerSearchBarContainer.classList.add("d-none");
    trendingSectionContainer.classList.add("d-none");
    categoriesSectionContainer.classList.add("d-none");

    const [hash, categoryIDAndName] = location.hash.split("=");
    const [categoryID, categoryName] = categoryIDAndName.split("-");

    genericSectionTitle.innerHTML = categoryName;

    const movies = await getMoviesByCategoryID(categoryID);
    printMoviesInContainer(movies, genericSectionContentContainer, true);
}