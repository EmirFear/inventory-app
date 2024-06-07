import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { fetchFail, fetchStart, loginSuccess, registerSuccess, logoutSuccess } from "../features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAxios from "./useAxios";

const useApiRequest = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { axiosToken, axiosPublic } = useAxios();

  const login = async (userData) => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosPublic.post("/auth/login/", userData);

      dispatch(loginSuccess(data));
      toastSuccessNotify("Login işlemi başarılı");
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Login başarısız");
      console.error("Login error:", error.response || error.message); // Hata mesajını daha detaylı yazdırıyoruz
    }
  };

  const register = async (userData) => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosPublic.post("/users/", userData);

      dispatch(registerSuccess(data));
      toastSuccessNotify("Kayıt işlemi başarılı");
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Kayıt başarısız");
      console.error("Register error:", error.response || error.message); // Hata mesajını daha detaylı yazdırıyoruz
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axiosToken.get("/auth/logout");
      dispatch(logoutSuccess());
      toastSuccessNotify("Çıkış işlemi başarılı");
      navigate("/login");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Çıkış işlemi başarısız");
      console.error("Logout error:", error.response || error.message); // Hata mesajını daha detaylı yazdırıyoruz
    }
  };

  return { login, register, logout };
};

export default useApiRequest;




















