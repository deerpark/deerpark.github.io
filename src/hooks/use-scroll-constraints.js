import { useState, useEffect } from 'react'

/**
 * 전체 화면 요소와 뷰포트의 상단/하단 스크롤 제약을 계산
 */
export default function useScrollConstraints(ref, measureConstraints) {
  const [constraints, setConstraints] = useState({
    top: 0,
    bottom: 0,
  })

  useEffect(() => {
    if (!measureConstraints) return

    const element = ref.current
    const viewportHeight = window.innerHeight
    const contentTop = element.offsetTop
    const contentHeight = element.offsetHeight
    const scrollableViewport = viewportHeight - contentTop * 2
    const top = Math.min(scrollableViewport - contentHeight, 0)

    setConstraints({ top, bottom: 0 })
  }, [measureConstraints])

  return constraints
}
