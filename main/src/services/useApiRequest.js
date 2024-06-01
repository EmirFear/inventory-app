import axios from "axios"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const useApiRequest = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const login = async(userData) => {
    dispatch(fetchStart())

    try {
      const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, userData)

      dispatch(loginSuccess(data))
      toastSuccessNotify("Login işlemi başarılı")
      navigate("/stock")
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify("Login başarısız oldu")
    }
  }

  return { login }
}

export default useApiRequest


















