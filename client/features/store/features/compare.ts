import { ProductType } from '@/types/user'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface typeState {
  status: boolean
  products: ProductType[]
}

const statusState: typeState = {
  status: false,
  products: []
}
export const ModalWishListSlice = createSlice({
  name: 'compare',
  initialState: statusState,
  reducers: {
    changeStatusCompare: state => {
      state.status = !state.status
    },
    ChangeProductsCompare: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload
    }
  }
})
export const { changeStatusCompare, ChangeProductsCompare } =
  ModalWishListSlice.actions
export default ModalWishListSlice.reducer
