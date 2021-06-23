import axios from 'axios'

export const validateDiscordMessage = (content, modalClass) => {
  // console.log('validateDiscordMessage content :>> ', content)
  const { title, name, email, link, message } = content
  let errArr = []
  console.log('validateDiscordMessage content :>> ', {
    title,
    name,
    email,
    link,
    message,
    modalClass,
  })

  const nameRegexp = /[^A-Za-z0-9 ]/
  const isNameInvalid = name.match(nameRegexp)
  console.log('isNameInvalid :>> ', isNameInvalid)
  if (!name.length || isNameInvalid) {
    errArr.push(modalClass === 'contact' ? 'contactName' : 'modalName')
  }

  const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const isEmailValid = email.match(emailRegexp)
  if (!email.length || !isEmailValid) {
    errArr.push(modalClass === 'contact' ? 'contactEmail' : 'modalEmail')
  }

  if (title === 'CV') {
    if (typeof link !== 'string' || !link.length) {
      errArr.push('modalCv')
    }
  }

  if (title === 'Contact Form') {
    if (
      typeof message !== 'string' ||
      !message.length ||
      message.length > 300
    ) {
      errArr.push('contactMessage')
    }
  }

  console.log('errArr :>> ', errArr)
  return errArr.length
    ? { isValid: false, errors: errArr }
    : { isValid: true, errors: null }
}

export const logToDiscord = async ({ title, name, email, link, message }) => {
  const nameEmail = `**${name}**  ${email}`
  const myLink = link ? `\`\`\`${link}\`\`\`` : ''
  const myMessage = message ? `\`\`\`${message}\`\`\`` : ''
  const myContent = [title, nameEmail, myLink, myMessage].join('\n')
  console.log('logToDiscord myContent :>> ', myContent)

  try {
    const response = await axios({
      method: 'post',
      url: `${process.env.GATSBY_BASE_URL}/.netlify/functions/sendToDiscord`,
      data: { content: myContent },
    })
    console.log(
      'axios sendToDiscord lambda response data :>>\n',
      response.status
    )
    return 'ok'
  } catch (e) {
    console.error('[logToDiscord] ERROR:', e.toString())
  }
}
