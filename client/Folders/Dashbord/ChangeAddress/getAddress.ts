import { formatShortAddress } from './cleareAddress'

export async function getAddress (lat: number, lng: number): Promise<string> {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
  )

  if (!res.ok) return 'خطا در دریافت آدرس'
  const data = await res.json()
  console.log(data)
  return formatShortAddress(data)
}
