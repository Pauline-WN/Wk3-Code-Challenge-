document.addEventListener('DOMContentLoaded', () => {
    const BASE_URL = "http://localhost:3000/films";
    fetch(BASE_URL)
        .then(response => response.json())
        .then(data => {
            const filmsList = document.getElementById('films');
            data.forEach(film => {
                const filmItem = document.createElement('li');
                filmItem.classList.add('film-item');
                filmItem.innerHTML = `
                    <img src="${film.poster}" alt="${film.title}" />
                    <span class="film-title">${film.title}</span>
                `;
                filmItem.addEventListener('click', () => displayFilmDetails(film));
                filmsList.appendChild(filmItem);
            });

            // Display details of the first film by default
            if (data.length > 0) {
                displayFilmDetails(data[0]);
            }
        })
        .catch(error => console.error('Error fetching films:', error));
});

function displayFilmDetails(film) {
    document.getElementById('movie-title').textContent = film.title;
    document.getElementById('movie-poster').src = film.poster;
    document.getElementById('movie-runtime').textContent = film.runtime;
    document.getElementById('movie-showtime').textContent = film.showtime;
    document.getElementById('movie-description').textContent = film.description;
    const availableTickets = film.capacity - film.tickets_sold;
    document.getElementById('movie-available-tickets').textContent = availableTickets;

    const buyTicketBtn = document.getElementById('buy-ticket-btn');

    buyTicketBtn.onclick = () => {
        if (film.tickets_sold < film.capacity) {
            film.tickets_sold++;
            const newAvailableTickets = film.capacity - film.tickets_sold;
            document.getElementById('movie-available-tickets').textContent = newAvailableTickets;
        } else {
            alert("Tickets sold out. Check the next movie.");
        }
    };
}