import axios from 'axios'

export const logToDiscord = async ({ title, name, email, link, message }) => {
  let myTitle
  if (!title) {
    myTitle = link ? '***CV Info***\n' : '***Presentation Request***\n'
  } else {
    myTitle = title
  }
  const nameEmail = `**${name}**  ${email}`
  const myLink = link ? `\`\`\`${link}\`\`\`` : ''
  const myMessage = message ? `\`\`\`${message}\`\`\`` : ''
  const myContent = [myTitle, nameEmail, myLink, myMessage].join('\n')
  console.log('logToDiscord myContent :>> ', myContent)

  try {
    const response = await axios({
      method: 'post',
      url: `${process.env.GATSBY_BASE_URL}/.netlify/functions/sendToDiscord`,
      data: { content: myContent },
    })
    console.log('axios sendToDiscord lambda response data :>>\n', response)

    return response
    // return 'okay'
  } catch (e) {
    console.error('[logToDiscord] ERROR:', e.toString())
  }
}
