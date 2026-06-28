interface Address {
  id: string
  receiver_name: string
  province_city: string
  address: string
  address_details: string
  postal_code: string
  receiver_phone: string
}
export interface ImageProductType {
  id: number
  image: string
  alt_text: string
  is_primary: boolean
  sort_order: number
}

export type User = {
  id: string
  fullname: string
  username: string
  email: string
  profile_image: string
  phone_number: string
  addresses?: Address[]
}
export interface Pagenation {
  count: number
  has_next: boolean
  has_previous: boolean
  page_size: number
  page: number
  pages: number
  next: string | null
  previous: string | null
}
export type ProductType = {
  id: string
  images: ImageProductType[]
  discription: string
  price: number
  stock: number
  created_at: string
  update_at: string
  is_active: boolean
  title: string
  slug: string
  average_star: number
  comments: CommentType[]
  related_products: []
  quantity?: number | undefined // number Product add to cart
}
export interface CommentType {
  id: number
  content: string
  created_at: string
  star: number
  user: User
}

export interface CategoryProductsType {
  id: number
  slug: string
  title: string
}
export interface ArticleType {
  id: number
  title: string
  short_discription: string
  image_article: string
  slug: string
  body: string
  create_at: string
  category: number
}
export interface PropsDataCenterType {
  womansCat: ProductType[]
  mensCat: ProductType[]
  articles: ArticleType[]
}
type ItemsOrder = {
  id: number
  product: ProductType
  quantity: number
  price: number
}
export interface OrderTypes {
  address: Address
  created_at: string
  id: number
  items: ItemsOrder[]
  note: string
  order_number: number
  status: number
}
