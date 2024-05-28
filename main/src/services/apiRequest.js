import axios from "axios"


export const login = async(userData) => {
    

    try {
        const data = await axios(`${process.env.REACT_APP_BASE_URL}/auth/login`, userData)
    } catch {

    }

    
}