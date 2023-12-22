import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ProductState {
  id: number | null
}

const initialState: ProductState = {
  id: null
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    startEditProduct: (state, action: PayloadAction<number>) => {
      state.id = action.payload
    },
    cancelEditProduct: (state) => {
      state.id = null
    }
  }
})

const productReducer = productSlice.reducer

export const { startEditProduct, cancelEditProduct } = productSlice.actions

export default productReducer
