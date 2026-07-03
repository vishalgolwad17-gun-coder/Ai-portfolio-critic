import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("manualuser")) || null,
};

const manualuserslice = createSlice({
  name: "manualuser",
  initialState,
  reducers: {
    setmanualUser: (state, action) => {
      state.user = action.payload;
      console.log(state.user);
    },

    logoutmanualUser: (state) => {
      state.user = null;
    },
  },
});

export const { setmanualUser, logoutmanualUser } = manualuserslice.actions;
export default manualuserslice.reducer;
