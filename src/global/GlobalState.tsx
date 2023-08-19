import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user: "" || null
}

const GlobalState = createSlice({
  name: "userState",
  initialState,
  reducers: {
    signUserGlobal: (state: any, { payload }: any) => {
        state.user = payload
    },
  }
});

export const { signUserGlobal} = GlobalState.actions

export default GlobalState.reducer