'use client'
import { PropsDataCenterType } from '@/types/user'
import { useAppDispatch } from './store/hooks'
import { setDataCenter } from './store/features/auth'
import { useEffect } from 'react'
import Home from './Home/Components/Home'
type props = {
  data: PropsDataCenterType
}
function Index ({ data }: props) {
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (data) {
      dispatch(setDataCenter(data))
    }
  }, [data, dispatch])

  return <Home />
}

export default Index
