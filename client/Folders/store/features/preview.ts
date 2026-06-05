
import { createSlice } from '@reduxjs/toolkit'

interface typeState {
  status: boolean
}

const statusState: typeState = {
  status: false
}
export const ModalWishListSlice = createSlice({
  name: 'preview',
  initialState: statusState,
  reducers: {
    changeStatusMP: state => {
      state.status = !state.status
    }
  }
})
export const { changeStatusMP } = ModalWishListSlice.actions
export default ModalWishListSlice.reducer
