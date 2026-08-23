const resultsContainer = document.getElementById("results-container");
const searchBtn = document.getElementById("search-icon");
const searchBox = document.getElementById("search-box");

searchBtn.addEventListener("click", async () => {

    const searchGenre = searchBox.value;

    const response = await fetch(`/api/genre?searchGenre=${encodeURIComponent(searchGenre)}`);

    const films = await response.json();

    resultsContainer.innerHTML = "";

    films.forEach(film => {

        const filmCard = document.createElement("div");
        filmCard.classList.add("film-card");

        filmCard.innerHTML = `
        <img src="/${film.poster_url.replace(/^public\//, '')}" width="200" height="300">
        <h2>${film.title}</h2>
        <p>Dir. ${film.director}</p>
        <p>(${film.year})</p>
        `

        resultsContainer.appendChild(filmCard);

    })

})