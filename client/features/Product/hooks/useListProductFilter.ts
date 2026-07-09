import { usePathname, useRouter, useSearchParams } from "next/navigation"

export function useListProductFilter(){
  const searchParams = useSearchParams()
  const ordering = searchParams.get('ordering')

  const router = useRouter()
  const pathname = usePathname()

  const handleOrdering = (value: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('ordering', value)
    params.set('page', '1')
    router.push(`${pathname}?${params.toString()}`)
  }
return{
    handleOrdering,
    ordering
}
}