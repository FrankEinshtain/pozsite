import React, { useState, createContext } from 'react'

export const UserContext = createContext()

const UserContextProvider = (props) => {
  const [modalClass, setModalClass] = useState(null)

  return (
    <UserContext.Provider
      value={{
        modalClass,
        setModalClass,
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
