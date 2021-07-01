import { useCallback, useRef } from 'react'
import { useRecoilState } from 'recoil'

export default function useIntersectionChecker(state, max) {
  const isScrolledRef = useRef(false)
  const [, setTitleSticky] = useRecoilState(state)
  const handleIsScrolled = useCallback(({ scrollTop }) => {
    const scrolled = scrollTop > max
    if (scrolled === isScrolledRef.current) return
    isScrolledRef.current = scrolled
    setTitleSticky(scrolled)
  }, [])

  return handleIsScrolled
}
