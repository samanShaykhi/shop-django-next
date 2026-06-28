import { ProductType } from '@/types/user'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface typeState {
  status: boolean
  products: ProductType[]|[]
}

const statusState: typeState = {
  status: false,
  products: []
}
export const ModalWishListSlice = createSlice({
  name: 'modalWishList',
  initialState: statusState,
  reducers: {
    changeStatus: state => {
      state.status = !state.status
    },
    changeProductsWhishList: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload
    }
  }
})
export const { changeStatus, changeProductsWhishList } =
  ModalWishListSlice.actions
export default ModalWishListSlice.reducer
