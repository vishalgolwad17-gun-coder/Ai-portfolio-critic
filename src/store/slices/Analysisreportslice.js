import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  report: JSON.parse(localStorage.getItem("report")) || null,
};

const analysisreportslice = createSlice({
  name: "report",
  initialState,
  reducers: {
    setReport: (state, action) => {
      state.report = action.payload;
    },
    clearReport: (state) => {
      state.report = null;
    },
  },
});

export const { setReport, clearReport } = analysisreportslice.actions;
export default analysisreportslice.reducer;
