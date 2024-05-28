import axios from "axios"


export const login = async(userData) => {
    const BASE_URL = "https://1015clarusway7.fullstack..com" 
    const data = await axios(`${BASE_URL}/auth/login`, userData)

    try {
        const data = await axios(`${BASE_URL}/auth/login`, userData)
    } catch {

    }

    
}