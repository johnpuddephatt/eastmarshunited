const fetchData = require('../../utils/helpers/fetchData.js')

const d = new Date()
d.setMonth(d.getMonth() - 3)
const threeMonthsAgo = d.toISOString()

const endPoint =
    process.env.CONTEXT == 'dev'
        ? `https://public-api.wordpress.com/wp/v2/sites/eastmarshunited.wordpress.com/posts?after=${threeMonthsAgo}&per_page=10&_embed`
        : `https://public-api.wordpress.com/wp/v2/sites/eastmarshunited.wordpress.com/posts?per_page=50&_embed`

module.exports = async function fetchPosts() {
    return fetchData('posts', endPoint)
}
