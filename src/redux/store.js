import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from './slices/SidebarSlice';


export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
    },
});