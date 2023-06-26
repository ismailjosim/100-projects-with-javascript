// let movieName = 'avatar'
const apikey = '40547155'

// target Element
const movieEl = document.getElementById('movie-name')
const searchBtn = document.getElementById('search-btn')
const showResult = document.getElementById('result')

// fetch data from api
const getMovie = () => {
    const movieName = movieEl.value
    const apiURL = `http://www.omdbapi.com/?t=${ movieName }&apikey=${ apikey }`

    if (movieName.length <= 0) {
        result.innerHTML = `<h3 class="msg">Please enter a movie name </h3>`
    } else {
        fetch(apiURL)
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    showResult.innerHTML = `
                    <div class="info">
                        <img src=${ data.Poster } class="poster">
                        <div>
                            <h2>${ data.Title }</h2>
                            <div class="rating">
                                <img src="./assets/star-icon.svg">
                                <h4>${ data.imdbRating }</h4>
                            </div>
                            <div class="details">
                                <span>${ data.Rated }</span>
                                <span>${ data.Year }</span>
                                <span>${ data.Runtime }</span>
                            </div>
                            <div class="genre">
                                <div>${ data.Genre.split(',').join(
                        '</div><div>',
                    ) }</div>
                            </div>
                        </div>
                    </div>
                    <h3>Plot:</h3>
                    <p>${ data.Plot }</p>
                    <h3>Cast:</h3>
                    <p>${ data.Actors }</p>
                    `
                }
            })
    }
}

searchBtn.addEventListener('click', getMovie)
window.addEventListener("load", getMovie);
