import { ProductType } from '@/types/user'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface typeState {
  status: boolean
  product: ProductType | null
}

const statusState: typeState = {
  status: false,
  product: null
}
export const ModalWishListSlice = createSlice({
  name: 'preview',
  initialState: statusState,
  reducers: {
    changeStatusMP: state => {
      state.status = !state.status
    },
    changeProductPreview: (state, action: PayloadAction<ProductType>) => {
      state.product = action.payload
    }
  }
})
export const { changeStatusMP, changeProductPreview } = ModalWishListSlice.actions
export default ModalWishListSlice.reducer
