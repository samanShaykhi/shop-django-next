import { createSlice } from '@reduxjs/toolkit'

interface typeState {
  status: boolean
}

const statusState: typeState = {
  status: false
}
export const ModalWishListSlice = createSlice({
  name: 'modalWishList',
  initialState: statusState,
  reducers: {
    changeStatus: state => {
      state.status = !state.status
    }
  }
})
export const { changeStatus } = ModalWishListSlice.actions
export default ModalWishListSlice.reducer
