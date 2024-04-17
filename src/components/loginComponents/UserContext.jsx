import React, { createContext, useState } from 'react'



export const userData = createContext()

const UserContext = ({children}) => {
    const [users, setUsers] = useState([])

    const updateUser = (data) =>{
        setUsers(data)
    }

  return (
    
    <userData.Provider value={{users, updateUser}}>
        {children}
    </userData.Provider>
  )
}

export default UserContext
