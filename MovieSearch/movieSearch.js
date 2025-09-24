const apiKey = 'aa6d4ed7';
let currentPage = 1;
let totalPages = 0;
let searchTerm = '';

document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();
    searchTerm = document.getElementById('movieTitle').value;
    const type = document.getElementById('movieType').value;
    currentPage = 1;
    fetchMovies(type);
});
function fetchMovies(type) {
    const url = `https://www.omdbapi.com/?s=${searchTerm}&type=${type}&page=${currentPage}&apikey=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                totalPages = Math.ceil(data.totalResults / 9);
                displayMovies(data.Search.slice(0, 9));
                displayPagination();
            } else {
                document.getElementById('results').innerHTML = `<div class="error">${data.Error}</div>`;
                displayPagination();
            }
        })
        .catch(error => console.error('Ошибка:', error));
}
function displayMovies(movies) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie';
        movieDiv.innerHTML = `
            <img src="${movie.Poster}">
            <div>
                <p>Тип: ${movie.Type}</p>
                <h3>${movie.Title} </h3>                        
                <p>Год: ${movie.Year}</p>
                <button id="detaileBtn" onclick="showDetails('${movie.imdbID}')">Подробнее</button>
            </div>
        `;
        resultsDiv.appendChild(movieDiv);
    });
}
function displayPagination() {
    const paginationDiv = document.querySelector('.pagination');
    paginationDiv.innerHTML = '';

    if (currentPage > 1) {
        paginationDiv.innerHTML += `
            
            <button onclick="changePage(${currentPage - 1})"><</button>
        `;
    }
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
        paginationDiv.innerHTML += `
            <button onclick="changePage(${i})" ${i === currentPage ? 'disabled style="background:#ccc"' : ''}>${i}</button>
        `;
    }
    if (currentPage < totalPages) {
        paginationDiv.innerHTML += `
            <button onclick="changePage(${currentPage + 1})">></button>                    
        `;
    }
}
function changePage(page) {
    currentPage = page;
    const type = document.getElementById('movieType').value;
    fetchMovies(type);
}

function showDetails(imdbID) {
    const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                displayDetails(data);
            } else {
                document.getElementById('details').innerHTML = `<div class="error">${data.Error}</div>`;
            }
        })
        .catch(error => console.error('Ошибка:', error));
}

function displayDetails(movie) {
    const detailsDiv = document.getElementById('details');
    detailsDiv.classList.add('details');
    detailsDiv.innerHTML = `             

        <img src="${movie.Poster}" alt="${movie.Title}" style="max-width: 200px;">
        <div>
        <h2>${movie.Title}</h2>
        <p><strong>Год выпуска:</strong> ${movie.Released}</p>
        <p><strong>Режиссер:</strong> ${movie.Director}</p>
        <p><strong>Актеры:</strong> ${movie.Actors}</p>
        <p><strong>Жанр:</strong> ${movie.Genre}</p>
        <p><strong>Страна:</strong> ${movie.Country}</p>
        <p><strong>Описание:</strong> ${movie.Plot}</p>
        <p><strong>Продолжительность:</strong> ${movie.Runtime}</p>
        <p><strong>Рейтинг:</strong> ${movie.imdbRating}</p>
        </div>
    `;
}