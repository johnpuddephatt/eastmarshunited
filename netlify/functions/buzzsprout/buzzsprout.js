import fetch from "node-fetch"

exports.handler = async (event, context, callback) => {
    const behanceEndpoint = `https://www.buzzsprout.com/api/1764181/episodes.json?api_token=76a69249f3fc975766b5faf5d4b449c7`
    const response = await fetch(behanceEndpoint)
    const data = await response.json()
    return  {
      statusCode: 200,
      body: JSON.stringify(data)
    }
}