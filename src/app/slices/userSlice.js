import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
  jwt: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setJWT: (state, action) => {
      state.jwt = action.payload
    },
  },
})

export const { setUser, setJWT } = userSlice.actions

export default userSlice.reducer
