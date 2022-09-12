module.exports = (movie) => `
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="stylesheet" href="style.css" />

			<title>Favorite Movies: ${movie.title}</title>
		</head>
		<body>
			<div class="container">
				<div class="movie-image-container">
					<img
						src="${movie.imageURL}"
						alt="Promotional Poster for the movie ${movie.title}"
					/>
					<h1>${movie.title}</h1>
					<h3>Directed by ${movie.director.join(' and ')}</h3>
					<p>${movie.blurb}</p>
				</div>
			</div>
		</body>
	</html>
`;
