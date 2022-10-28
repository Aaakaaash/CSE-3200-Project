import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  access_token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    storeUserToken: (state, action) => {
      state.access_token = action.payload;
    },
  },
});

export const { storeUserToken } = authSlice.actions;

export default authSlice.reducer;