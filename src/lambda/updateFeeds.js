const Parser = require('rss-parser');

export function handlerUpdates(event, context, callback) {
	let FEEDS = [
		'https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss',
		'https://www.nasa.gov/rss/dyn/armstrong_news.rss',
		'https://www.nasa.gov/rss/dyn/centers/stennis/news/latest_news.rss'
	];

	let parser = new Parser();

    FEEDS.push(event.value);

    console.log(event);

	const feedRequests = FEEDS.map(feed => {
		return parser.parseURL(feed);
	});

	Promise.all(feedRequests).then(response => {
		callback(null, {
			statusCode: 200,
			body: JSON.stringify(response)
		});
	});
}
