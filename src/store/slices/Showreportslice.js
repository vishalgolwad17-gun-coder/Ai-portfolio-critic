import { createSlice } from "@reduxjs/toolkit";

const showreportslice = createSlice({
  name: "showreport",
  initialState: {
    showreport: false,
  },
  reducers: {
    setShowreport: (state, action) => {
      state.showreport = action.payload;
    },
  },
});

export const { setShowreport } = showreportslice.actions;

export default showreportslice.reducer;
