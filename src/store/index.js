import { configureStore } from "@reduxjs/toolkit";
import curdSlice from "../reducer/curdSlice";
const store=configureStore({
    reducer:{curd:curdSlice}
})
export default store;