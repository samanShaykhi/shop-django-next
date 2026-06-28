import SingleProduct from '@/Folders/Product/SingleProduct/SingleProduct'
import { ApiUrl } from '@/utils/axios/apiUrl'
import { notFound } from 'next/navigation'

async function getProduct (slug: string) {
  const res = await fetch(`${ApiUrl}/products/singleproduct/${slug}/`, {
    cache: 'no-store'
  })

  if (res.status === 404) {
    notFound()
  }

  if (!res.ok) {
    throw new Error('خطا در دریافت محصول')
  }

  return res.json()
}

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function page ({ params }: Props) {
  const { slug } = await params
  const product = await getProduct(slug)
  return <SingleProduct product={product} />
}
