import { ArticleType, Pagenation } from '@/types/user'
export interface AllArtAndPagenation extends Pagenation {
  results: ArticleType[]
}
export type ArtAnPageType = {
  articles: AllArtAndPagenation
}