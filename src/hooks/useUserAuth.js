
import { useContext } from 'react'
import { userContext } from '../context/user.context'

export const useUserAuth = () => {
    const response = useContext(userContext)

    if(!response) {
        throw new Error("Not context Area")
    }

  return response
}
