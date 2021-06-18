const axios = require('axios')

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  try {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 200,
        body: JSON.stringify({
          success: false,
          error: 'method error: must be POST!',
        }),
      }
    }

    const body = JSON.parse(event.body)
    const { content } = body

    if (typeof content !== 'string') {
      return {
        statusCode: 200,
        body: JSON.stringify({
          success: false,
          error: 'content error: must be type of string!',
        }),
      }
    } else {
      console.log('lambda body :>> ', body)
      const response = await axios({
        method: 'post',
        url: process.env.GATSBY_CONTACT_URL,
        data: { content },
      })
      console.log('discord axios response :>> ', response)
      // return response
      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          data: 'OKAY',
          // error: 'content error: must be type of string!',
        }),
      }
    }
  } catch (e) {
    console.log('getMenu ERROR!\n', JSON.stringify(e.message, null, 2))
    return {
      statusCode: 200,
      body: JSON.stringify({ success: false, error: e.message }),
    }
  }
}
