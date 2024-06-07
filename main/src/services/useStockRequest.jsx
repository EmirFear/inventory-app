// src/services/useStockRequest.js
import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { fetchStart, fetchSuccess, fetchFailure } from "../features/stockSlice";

const useStockRequest = () => {
  const { axiosToken } = useAxios();
  const dispatch = useDispatch();

  const getFirms = async (category, endpoint) => {
    dispatch(fetchStart({ category }));
    try {
      const response = await axiosToken.get(endpoint); // GET isteği yapılır
      dispatch(fetchSuccess({ category, data: response.data.data }));
    } catch (error) {
      dispatch(fetchFailure({ category, error: error.message }));
    }
  };

  return { getFirms };
};

export default useStockRequest;
