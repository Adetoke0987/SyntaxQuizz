<<<<<<< HEAD
import React, { createContext, useState } from 'react'



const userData = createContext()

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


=======
import React, { createContext, useState } from 'react'



const userData = createContext()

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


>>>>>>> parent of f341fdb (update)
export default UserContext