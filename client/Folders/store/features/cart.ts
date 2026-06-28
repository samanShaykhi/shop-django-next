import { ProductType } from '@/types/user'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface typeState {
  shoppingCart: ProductType[]
}

const statusState: typeState = {
  shoppingCart: []
}
export const ShoppingCart = createSlice({
  name: 'compare',
  initialState: statusState,
  reducers: {
    ChangeShoppingCart: (state, action: PayloadAction<ProductType[]>) => {
      state.shoppingCart = action.payload
    }
  }
})
export const { ChangeShoppingCart } = ShoppingCart.actions
export default ShoppingCart.reducer
