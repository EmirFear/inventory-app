import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: "",
  token: "",
  loading:false,
  error:false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart : (state)=>{
      state.loading = true
    }
  },
})

export const { fetchStart } = authSlice.actions
export default authSlice.reducer
