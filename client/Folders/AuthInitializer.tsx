'use client'

import { useEffect } from 'react'
import { useAppDispatch } from './store/hooks'
import { apiGetToken } from './store/features/auth'

export default function AuthInitializer () {
  const dispatch = useAppDispatch()
  useEffect(() => {
    console.log('first')
    dispatch(apiGetToken())
  }, [])

  return null
}
