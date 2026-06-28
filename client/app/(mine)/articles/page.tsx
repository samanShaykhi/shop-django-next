import AllArticle from '@/Folders/Article/AllArticle'
import { ApiUrl } from '@/utils/axios/apiUrl'
async function getArticles () {
  const res = await fetch(`${ApiUrl}/article/articles`, {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('خطا در دریافت محصول')
  }

  return res.json()
}
export default async function page () {
  const articles = await getArticles()
  return <AllArticle articles={articles} />
}
