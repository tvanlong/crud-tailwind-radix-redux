import { configureStore } from '@reduxjs/toolkit'
import productReducer from 'src/pages/Products/product.slice'
import { productApi } from './pages/Products/product.service'
import { setupListeners } from '@reduxjs/toolkit/query'
import { loginApi } from './pages/Login/login.service'
import authReducer from './pages/Login/auth.slice'

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    [productApi.reducerPath]: productApi.reducer, // Thêm reducer được tạo ra từ api slice
    [loginApi.reducerPath]: loginApi.reducer // Thêm reducer được tạo ra từ api slice
  },

  // Thêm middleware của api slice để enable caching, invalidation, polling, của rtk query
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware, loginApi.middleware)
})

// Optinal, nhưng bắt buộc nếu dùng tính năng refetchOnFocus/refetchOnReconnect
setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
