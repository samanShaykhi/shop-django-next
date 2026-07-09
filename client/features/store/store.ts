import { configureStore } from '@reduxjs/toolkit'
import modalWishListReducer from './features/ModalWishListSlice'
import modalPreviewReducer from './features/preview'
import modalCompare from './features/compare'
import authReducer from './features/auth'
import ShoppingCart from './features/cart'
export const store = configureStore({
  reducer: {
    modalWishList: modalWishListReducer,
    modalPreview: modalPreviewReducer,
    modalCompare: modalCompare,
    auth: authReducer,
    ShoppingCart:ShoppingCart
  }
})

export type RooteState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
