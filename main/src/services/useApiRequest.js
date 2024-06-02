import axios from "axios"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import { fetchFail, fetchStart, loginSuccess, registerSuccess, logoutSuccess } from "../features/authSlice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const useApiRequest = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.auth.token )

  const login = async (userData) => {
    dispatch(fetchStart())

    try {
      const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, userData)

      dispatch(loginSuccess(data))
      toastSuccessNotify("Login işlemi başarılı")
      navigate("/stock")
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify("Login başarısız")
    }
  }

  const register = async (userData) => {
    dispatch(fetchStart())

    try {
      const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/register`, userData)

      dispatch(registerSuccess(data))
      toastSuccessNotify("Kayıt işlemi başarılı")
      navigate("/stock")
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify("Kayıt başarısız")
      console.log(error);
    }
  }

  const logout = async () => {
    dispatch(fetchStart())
    try {
      await axios(`${process.env.REACT_APP_BASE_URL}/auth/logout`, {
        headers: {Authorization: `Token ${token}`}
      })
      dispatch(logoutSuccess())
      toastSuccessNotify("Çıkış işlemi başarılı")
      navigate("/login")
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify("Çıkış işlemi başarısız")

  }}

  return { login, register, logout }
}

export default useApiRequest



















