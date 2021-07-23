import axios from 'axios'
import { useState, useEffect } from 'react'

export const useIsDesktop = (breakpoint = 991) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > breakpoint)

  useEffect(() => {
    if (window) {
      setIsDesktop(window.innerWidth > breakpoint)
      window.addEventListener('resize', () => {
        setIsDesktop(window.innerWidth > breakpoint)
      })
    }

    return () => {
      window.removeEventListener('resize', () => {
        setIsDesktop(window.innerWidth > breakpoint)
      })
    }
  }, [breakpoint])
  return isDesktop
}

export const validateDiscordMessage = (content, modalClass) => {
  const { title, name, email, link, message } = content
  let errArr = []

  const nameRegex = /^[А-Яа-яёЁA-Za-z0-9\s]{1,100}$/
  const isNameValid = name.match(nameRegex)
  if (!name.length || !isNameValid) {
    errArr.push(modalClass === 'contact' ? 'contactName' : 'modalName')
  }

  const emailRegex = /^(\w+\.*\w+@\w+\.\w{2,6}([\w.]{2,6})*)$/
  const isEmailValid = email.match(emailRegex)
  if (!email.length || !isEmailValid) {
    errArr.push(modalClass === 'contact' ? 'contactEmail' : 'modalEmail')
  }

  if (title === 'CV') {
    if (typeof link !== 'string' || !link.length || link.length > 200) {
      errArr.push('modalCv')
    }
  }

  if (title === 'Contact Form') {
    const messageRegex = /^[А-Яа-яёЁA-Za-z0-9-\s]+$/
    const isMessageValid = message.match(messageRegex)
    if (!message.length || !isMessageValid) {
      errArr.push(modalClass === 'contact' ? 'contactMessage' : 'modalMessage')
    }
    if (
      typeof message !== 'string' ||
      !message.length ||
      message.length > 300
    ) {
      errArr.push('contactMessage')
    }
  }

  return errArr.length
    ? { isValid: false, errors: errArr }
    : { isValid: true, errors: null }
}

export const logToDiscord = async ({ title, name, email, link, message }) => {
  const nameEmail = `**${name}**  ${email}`
  const myLink = link ? `\`\`\`${link}\`\`\`` : ''
  const myMessage = message ? `\`\`\`${message}\`\`\`` : ''
  const myContent = [title, nameEmail, myLink, myMessage].join('\n')

  try {
    const response = await axios({
      method: 'post',
      url: `${process.env.GATSBY_BASE_URL}/.netlify/functions/sendToDiscord`,
      data: { content: myContent },
    })
    console.log('[sendToDiscord] response status :>>\n', response.status)
    return 'ok'
  } catch (e) {
    console.error('[logToDiscord] ERROR:', e.toString())
  }
}
