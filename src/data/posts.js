const fetchData = require('../../utils/helpers/fetchData.js');

const endPoint = 'https://public-api.wordpress.com/wp/v2/sites/eastmarshunited.wordpress.com/posts?per_page=20&_embed';

module.exports = async function fetchPosts() {
	return fetchData('posts', endPoint);
};