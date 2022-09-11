const express = require('express');
const app = express();

// Data
const data = require('./dummyData');

// Volleyball middleware
const volleyball = require('volleyball');
app.use(volleyball);

// Static
app.use(express.static('public'));

app.get('/', (req, res) => {
	const html = `try going to <a href="/health"> Health </a> or <a href="/movies"> Movies </a>`;
	res.send(html);
});

app.get('/health', (req, res) => {
	res.send('Server is Healthy!');
});

app.get('/movies', (req, res) => {
	const html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="style.css">

      <title>Favorite Movies</title>
    </head>
    <body>
      <div class="container">
        <h1>Rose's Favorite Movies</h1>
        <p>
          Below are some listings about my favorite movies as of late. Click on
          them to learn more.
        </p>
        <div class="movie-container">
          ${data
						.map(
							(movie) =>
								`<div class="movie-card">
							<div class="movie-image-container">
								<img
									src="${movie.imageURL}"
									alt="Promotional Poster for the movie ${movie.title}"
								/>
							</div>
							<h3>${movie.title}</h3>
							<h5>Directed by ${movie.director.join(' and ')}</h5>
						</div>`
						)
						.join('')}
        </div>
      </div>
    </body>
  </html>
  `;
	res.send(html);
});

const PORT = 1337;
app.listen(PORT, () => {
	console.log(`App is listening in port ${PORT}`);
});
