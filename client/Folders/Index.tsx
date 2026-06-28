'use client'
import { PropsDataCenterType } from '@/types/user'
import PageCenter from './PageCenter/PageCenter'
import { useAppDispatch } from './store/hooks'
import { setDataCenter } from './store/features/auth'
import { useEffect } from 'react'
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

  return <PageCenter />
}

export default Index
