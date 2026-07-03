import { configureStore } from "@reduxjs/toolkit";
import userslice from "./slices/userslice";
import manualuserslice from "./slices/manualuserslice";
import analysisreportslice from "./slices/Analysisreportslice";
import urlslice from "./slices/urlslice";
import showreportslice from "./slices/Showreportslice";

export const store = configureStore({
  reducer: {
    user: userslice,
    manualuser: manualuserslice,
    report: analysisreportslice,
    url: urlslice,
    showreport: showreportslice,
  },
});
