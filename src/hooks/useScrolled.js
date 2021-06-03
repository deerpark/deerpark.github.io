import { useState, useEffect, useRef } from 'react'
import useMeasure from 'react-use-measure'
import { ResizeObserver } from '@juggle/resize-observer'

const IDLE_MAX_Y = 70

export default function useScrolled() {
  const originY = useRef(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [ref, { y }] = useMeasure({ scroll: true, polyfill: ResizeObserver })
  useEffect(() => {
    const scrolled = originY.current - y > IDLE_MAX_Y
    if (originY.current === 0 && y !== 0) originY.current = y // originY.current 값 초기화
    if (isScrolled !== scrolled) {
      setIsScrolled(scrolled)
    }
  }, [y])

  return [isScrolled, ref]
}
