const Parser = require('rss-parser');

// function getFeed(context) {
// 	let url = '';
// 	if(context.body && context.body.url) url = context.body.url;

// 	let parser = new Parser();

// 	// const feedRequests = FEEDS.map(feed => {
// 	// 	return parser.parseURL(feed);
// 	// });
// 	const feedRequest = parser.parseURL(url);
// 	return feedRequest;
// }


export function handler(event, context, callback) {
	let FEEDS = [
		'https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss',
		'https://www.nasa.gov/rss/dyn/armstrong_news.rss',
		'https://www.nasa.gov/rss/dyn/centers/stennis/news/latest_news.rss'
	];
	// let FEEDS = [];
	// feedsUrls.map(feed => {
	// 	FEEDS.push(feed);
	// });

	let parser = new Parser();

	const feedRequests = FEEDS.map(feed => {
		return parser.parseURL(feed);
	});
	//const feedRequest = parser.parseURL(url);

	Promise.all(feedRequests).then(response => {
		callback(null, {
			statusCode: 200,
			body: JSON.stringify(response)
		});
	});
}
