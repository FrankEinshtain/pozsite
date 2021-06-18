import axios from 'axios'

export const logToDiscord = async ({ name, email, link }) => {
  const title = link ? '***CV Info***\n' : '***Presentation Request***\n'
  const nameEmail = `**${name}**  ${email}`
  const cvLink = link ? `\`\`\`${link}\`\`\`` : ''
  const content = [title, nameEmail, cvLink].join('\n')
  try {
    const res = await axios({
      method: 'POST',
      url: `${process.env.REACT_APP_BASE_URL}/.netlify/functions/sendToDiscord`,
      data: {
        content: content,
      },
    })
    console.log('axios sendToDiscord lambda response data :>>\n', res.data)
  } catch (e) {
    console.error('[logToDiscord] ERROR:', e.toString())
  }
}
