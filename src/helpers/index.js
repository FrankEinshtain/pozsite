import axios from 'axios'
// import dotenv from 'dotenv'
// dotenv.config()

export const logToDiscord = async ({ name, email, link }) => {
  const title = link ? '***CV Info***\n' : '***Presentation Request***\n'
  const nameEmail = `**${name}**  ${email}`
  const cvLink = link ? `\`\`\`${link}\`\`\`` : ''
  const content = [title, nameEmail, cvLink].join('\n')
  console.log('logToDiscord content :>> ', content)

  // const { GATSBY_CONTACT_URL, GATSBY_BASE_URL } = process.env
  try {
    console.log('GATSBY_BASE_URL :>> ', process.env.GATSBY_BASE_URL)
    console.log('GATSBY_CONTACT_URL :>> ', process.env.GATSBY_CONTACT_URL)
    // url: `${process.env.REACT_APP_BASE_URL}.netlify/functions/sendToDiscord`,
    // const res = await axios({
    //   method: 'POST',
    //   url: `/.netlify/functions/sendToDiscord`,
    //   data: {
    //     content: content,
    //   },
    // })

    // url: process.env.GATSBY_CONTACT_URL,
    const response = await axios({
      method: 'post',
      url: `${process.env.GATSBY_BASE_URL}.netlify/functions/sendToDiscord`,
      data: { content },
    })
    console.log('axios sendToDiscord lambda response data :>>\n', response)

    return response
  } catch (e) {
    console.error('[logToDiscord] ERROR:', e.toString())
  }
}
