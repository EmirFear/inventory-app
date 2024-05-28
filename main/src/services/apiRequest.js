import axios from "axios"


export const login = async(userData) => {
    const BASE_URL = "https://10157.fullstack.clarusway.com" 
    const data = await axios(`${BASE_URL}/auth/login`, userData)

    try {
        const data = await axios(`${BASE_URL}/auth/login`, userData)
    } catch {
        
    }

    
}