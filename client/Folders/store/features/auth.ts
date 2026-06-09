import { axiosConfig } from '@/utils/axios/axios'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { User } from '../../../types/user'
import { ApiUrl } from '@/utils/axios/apiUrl'
interface AuthState {
  token: string
  loading: boolean
  error: string | null
  user: User | null
}

const initialState: AuthState = {
  token: '',
  user: null,
  loading: false,
  error: null
}

export const apiGetToken = createAsyncThunk(
  'auth/apiGetToken',
  async (_, thunkAPI) => {
    try {
      // const response = await axiosConfig('/account/refresh',{
      //   method:"POST"
      // })
      const response = await fetch(`${ApiUrl}/account/refresh`, {
        method: 'POST',
        credentials: 'include'
      })
      return await response.json()
      // return response.data
    } catch (error: unknown) {
      console.log(error)
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(
          error.response?.data?.message || error.message
        )
      }
      return thunkAPI.rejectWithValue('Something went wrong')
    }
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (
      state,
      action: PayloadAction<{
        token: string
        user: User
      }>
    ) => {
      state.token = action.payload.token
      state.user = action.payload.user
    },
    setUser: (state, action: PayloadAction<{ user: User }>) => {
      state.user = action.payload.user
    },
    cleartToken: state => {
      state.token = ''
      state.user = null
    }
  },
  extraReducers: Builder => {
    Builder.addCase(apiGetToken.pending, state => {
      state.loading = true
    })
      .addCase(apiGetToken.fulfilled, (state, action) => {
        state.loading = false
        state.token = action.payload.token
        state.user = action.payload.user
      })
      .addCase(apiGetToken.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  }
})
export const { cleartToken, setToken, setUser } = authSlice.actions

export default authSlice.reducer
