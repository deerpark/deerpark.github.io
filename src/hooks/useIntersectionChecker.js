import { useCallback, useRef } from 'react'
import { useRecoilState } from 'recoil'
import { isScrolledState } from '../states'

const IDLE_MAX_Y = 312

export default function useIntersectionChecker() {
  const isScrolledRef = useRef(false)
  const [, setIsScrolled] = useRecoilState(isScrolledState)
  const handleIsScrolled = useCallback(({ scrollTop }) => {
    const scrolled = scrollTop > IDLE_MAX_Y
    if (scrolled === isScrolledRef.current) return
    isScrolledRef.current = scrolled
    setIsScrolled(scrolled)
  }, [])

  return handleIsScrolled
}
