import { createSlice } from "@reduxjs/toolkit";

const urlslice = createSlice({
  name: "url",
  initialState: {
    portfolioUrl: "",
    portfolioImage: "",
  },
  reducers: {
    setportfoliourl: (state, action) => {
      state.portfolioUrl = action.payload;
    },
    setportfolioimage: (state, action) => {
      state.portfolioImage = action.payload;

      console.log(state.portfolioImage);
    },
  },
});

export const { setportfoliourl, setportfolioimage } = urlslice.actions;
export default urlslice.reducer;
