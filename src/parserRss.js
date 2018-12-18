'use strict';

const Parser = require('rss-parser');
const parser = new Parser();

module.exports = function(context, cb) {
	let url = '';
	if(context.body && context.body.url) url = context.body.url;
	if(context.query && context.query.url) url = context.query.url;
	if(url === '') cb(new Error('URL parameter not passed.'));
	console.log('gonna parse '+url);
	
 	parser.parseURL(url)
	.then(feed => {
		console.log(feed);
		cb(null, {feed:feed});
	})
	.catch(e => {
		cb(e);
	});
	
}

// export function handler(event, context, callback) {

// 	let FEEDS = [
// 		'https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss',
// 		'https://www.nasa.gov/rss/dyn/armstrong_news.rss',
// 		'https://www.nasa.gov/rss/dyn/centers/stennis/news/latest_news.rss'
//     ];
//     let FEEDS = 

// 	let parser = new Parser();

// 	const feedRequests = FEEDS.map(feed => {
// 		return parser.parseURL(feed);
// 	});

// 	Promise.all(feedRequests).then(response => {
// 		callback(null, {
// 			statusCode: 200,
// 			body: JSON.stringify(response)
// 		});
// 	});
// }
