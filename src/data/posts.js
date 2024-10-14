const fetchData = require('../../utils/helpers/fetchData.js')

const d = new Date()
d.setMonth(d.getMonth() - 3)
const threeMonthsAgo = d.toISOString()

console.log('KEY: ', process.env)

const endPoint =
    process.env.CONTEXT == 'dev'
        ? `https://public-api.wordpress.com/wp/v2/sites/eastmarshunited.wordpress.com/posts?Authorization=Bearer${process.env.WORDPRESS_API_KEY}&after=${threeMonthsAgo}&per_page=10&_embed`
        : `https://public-api.wordpress.com/wp/v2/sites/eastmarshunited.wordpress.com/posts?Authorization=Bearer${process.env.WORDPRESS_API_KEY}&per_page=50&_embed`

module.exports = async function fetchPosts() {
    return fetchData('posts', endPoint)
}
