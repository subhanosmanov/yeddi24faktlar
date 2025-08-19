import { configureStore } from "@reduxjs/toolkit";
import savedReducer from "./savedSlice"// nümunə slice

export const store = configureStore({
    reducer: {
        saved: savedReducer, // burda slice-ları qeyd edirik
    },
});