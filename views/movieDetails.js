module.exports = (movie) => `
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="stylesheet" href="/style.css" />

			<title>Favorite Movies: ${movie.title}</title>
		</head>
		<body>
			<div class="container">
      <div class="detailed-movie-image-container">
      <img
        src="${movie.imageURL}"
        alt="Promotional Poster for the movie ${movie.title}"
      />
      </div>
					<h1>${movie.title}</h1>
					<h3>Directed by ${movie.director.join(' and ')}</h3>
          <h3 class="movie-starring">Starring: ${movie.starring.join(', ')}</h3>
					<p class="movie-blurb">${movie.blurb}</p>
          <h3><a href="${movie.trailerURL}">Trailer</a></h3>
          <p>Runtime: ${movie.runtime} minutes</p>
          <p>Year Released: ${movie.year}</p>

			</div>
		</body>
	</html>
`;
