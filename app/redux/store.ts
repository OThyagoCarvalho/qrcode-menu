import { configureStore } from "@reduxjs/toolkit";
import { menuSlice } from "./features/menu/menuSlice";

const store = configureStore({
    reducer: {
        value: menuSlice.reducer
    }
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch