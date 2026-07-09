import { useCallback, useEffect, useRef, useState } from 'react'

export function useFSSlider (length: number, delay = 8000) {
  const [index, setIndex] = useState<number>(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const clear = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }
  const next = useCallback(() => {
    setIndex(prev => (prev + 1) % length)
  }, [length])
  const prev = useCallback(() => {
    setIndex(prev => (prev - 1 + length) % length)
  }, [length])
  const goTo = useCallback((i: number) => {
    setIndex(i)
  }, [])

  const reset = useCallback(() => {
    clear()

    intervalRef.current = setInterval(next, delay)
  }, [delay, next])

  useEffect(() => {
    reset()
    return clear
  }, [reset])
  return {
    index,
    next: () => {
      next()
      reset()
    },
    prev: () => {
      prev()
      reset()
    },
    goTo: (i: number) => {
      goTo(i)
      reset()
    }
  }
}
