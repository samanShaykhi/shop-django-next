import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/features/store/hooks'
import { setToken } from '@/features/store/features/auth'
import { loginService } from '../services/login.service'

export function useLogin () {
  const { token, loading } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  const [phone, setPhone] = useState('')

  const [loadingSpinner, setLoading] = useState(false)

  const submit = async () => {
    setLoading(true)

    try {
      const token = await loginService(phone)

      dispatch(setToken(token))
    } finally {
      setLoading(false)
    }
  }

  return {
    phone,
    loading,
    token,
    setPhone,
    submit,
    loadingSpinner
  }
}
