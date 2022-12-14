const data = [
	{
		title: 'The Lighthouse',
		year: 2019,
		director: ['Robert Eggers'],
		starring: ['Willem Dafoe', 'Robert Pattinson'],
		runtime: 109,
		blurb:
			'Two lighthouse keepers try to maintain their sanity while living on a remote and mysterious New England island in the 1890s.',
		trailerURL: 'https://www.youtube.com/watch?v=Hyag7lR8CPA',
		imageURL: '/thelighthouse.jpg',
	},
	{
		title: 'Good Time',
		year: 2017,
		director: ['Josh Safdie', 'Benny Safdie'],
		starring: ['Robert Pattinson'],
		runtime: 101,
		blurb:
			"After a botched bank robbery lands his younger brother in prison, Connie Nikas embarks on a twisted odyssey through New York City's underworld to get his brother Nick out of jail.",
		trailerURL: 'https://www.youtube.com/watch?v=upsR80YmwWc',
		imageURL: '/goodtime.png',
	},
	{
		title: 'Pig',
		year: 2021,
		director: ['Michael Sarnoski'],
		starring: ['Nicolas Cage', 'Alex Wolff', 'Adam Arkin'],
		runtime: 92,
		blurb:
			'A truffle hunter who lives alone in the Oregon wilderness must return to his past in Portland in search of his beloved foraging pig after she is kidnapped.',
		trailerURL: 'https://www.youtube.com/watch?v=-4nRpdONaAA',
		imageURL: '/pig.jpg',
	},
	{
		title: 'The Mist',
		year: 2007,
		director: ['Frank Darabont'],
		starring: [
			'Thomas Jane',
			'Marcia Gay Harden',
			'Laurie Holden',
			'Andre Braugher',
			'Toby Jones',
			'William Sadler',
			'Jeffrey DeMunn',
			'Frances Sternhagen',
			'Sam Witwer',
			'Alexa Davalos',
			'Nathan Gamble',
			'Buck Taylor',
		],
		runtime: 126,
		blurb:
			'A freak storm unleashes a species of bloodthirsty creatures on a small town, where a small band of citizens hole up in a supermarket and fight for their lives.',
		trailerURL: 'https://www.youtube.com/watch?v=LhCKXJNGzN8',
		imageURL: '/themist.jpg',
	},
	{
		title: 'The Thing',
		year: 1982,
		director: ['John Carpenter'],
		starring: ['Kurt Russel'],
		runtime: 109,
		blurb:
			'A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.',
		trailerURL: 'https://www.youtube.com/watch?v=5ftmr17M-a4',
		imageURL: '/thething.jpg',
	},
];

const list = () => {
	return [...data];
};

const find = (title) => {
	for (let i = 0; i < data.length; i++) {
		if (data[i].title === title) {
			return { ...data[i] };
		}
	}
	return false;
};
module.exports = { list: list, find: find };
