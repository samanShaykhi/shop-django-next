import Index from '@/features/Index'
import { ApiUrl } from '@/utils/axios/apiUrl'
async function getDataCenter () {
  const res = await fetch(`${ApiUrl}/data-center`, {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('خطا در دریافت دیتا')
  }

  return res.json()
}


export default async function Home () {
  const data = await getDataCenter()
  return <Index data={data} />
}
