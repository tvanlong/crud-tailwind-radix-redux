import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface AuthState {
  isAuthenticated: boolean
}

const initialAuthState: AuthState = {
  isAuthenticated: localStorage.getItem('token') ? true : false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    loginAccount: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true
      localStorage.setItem('token', action.payload)
    },
    logoutAccount: (state) => {
      state.isAuthenticated = false
      localStorage.removeItem('token')
    }
  }
})

export const { loginAccount, logoutAccount } = authSlice.actions

const authReducer = authSlice.reducer
export default authReducer
