import { configureStore } from "@reduxjs/toolkit";
import { menuSlice } from "./features/menu/menuSlice";

const Store = configureStore({
    reducer: {
        value: menuSlice.reducer
    }
})

export default Store