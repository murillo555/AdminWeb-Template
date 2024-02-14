import { configureStore } from "@reduxjs/toolkit";
import userSlices from "./slices/userSlices";
import RoleSlices from "./slices/roleSlice"


export const store = configureStore({
    reducer: {
        user: userSlices,
        role:RoleSlices
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
    devTools: process.env.NODE_ENV !== "production",
});
