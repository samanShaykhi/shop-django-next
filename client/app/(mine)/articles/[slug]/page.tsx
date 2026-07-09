import SingleArticle from '@/features/Article/SingleArticle/SingleArticle'
import { ApiUrl } from '@/utils/axios/apiUrl'
import { notFound } from 'next/navigation'

async function getArticle (slug: string) {
  const res = await fetch(`${ApiUrl}/article/single-article/${slug}`, {
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
  const article = await getArticle(slug)
  return <SingleArticle article={article} />
}
