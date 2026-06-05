
import { createSlice } from '@reduxjs/toolkit'

interface typeState {
  status: boolean
}

const statusState: typeState = {
  status: false
}
export const ModalWishListSlice = createSlice({
  name: 'compare',
  initialState: statusState,
  reducers: {
    changeStatusCompare: state => {
      state.status = !state.status
    }
  }
})
export const { changeStatusCompare } = ModalWishListSlice.actions
export default ModalWishListSlice.reducer
