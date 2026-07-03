import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

const userslice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      console.log(state.user.email);
    },

    duplicateUser: (state, action) => {
      state.user = action.payload;
      console.log(state.user.email);
    },

    logoutUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logoutUser } = userslice.actions;
export default userslice.reducer;
