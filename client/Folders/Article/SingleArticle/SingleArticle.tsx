import { ArticleType } from '@/types/user'

type props = {
  article: ArticleType
}
export default function SingleArticle ({ article }: props) {
  return (
    <div className='container overflow-hidden '>
      <div>
        <h1 className='text-[25px] font-bold my-5'> {article.title} </h1>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: article.body
        }}
      />
    </div>
  )
}
