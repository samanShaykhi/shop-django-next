import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function useRedirectIfAuthenticated (
  token: string | null,
  loading: boolean
) {
  const router = useRouter()

  useEffect(() => {
    if (loading) return

    if (token) {
      router.replace('/')
    }
  }, [token, loading, router])
}
