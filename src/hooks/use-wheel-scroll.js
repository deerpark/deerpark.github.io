import { useDomEvent } from 'framer-motion'
import { spring } from 'popmotion'
import { mix } from '@popmotion/popcorn'
import { debounce } from 'lodash'

// 휠 스크롤 이벤트가 외부로 이동할 수 있는 절대 거리
// "스냅 백" 애니메이션을 실행하기 전에 정의된 제약 조건
const deltaThreshold = 5

// 휠 이벤트가 제약 조건을 넘어 발생하면 delta를 이 양만큼 곱합니다.
const elasticFactor = 0.2

function springTo(value, from, to) {
  if (value.isAnimating()) return

  value.start(complete => {
    const animation = spring({
      from,
      to,
      velocity: value.getVelocity(),
      stiffness: 400,
      damping: 40,
    }).start({
      update: v => value.set(v),
      complete,
    })

    return () => animation.stop()
  })
}

const debouncedSpringTo = debounce(springTo, 100)

/**
 *
 * @param ref - 리스너를 연결할 요소의 참조
 * @param y - 스크롤 가능한 요소의 MotionValue - Element와 다를 수 있음
 * @param constraints - 픽셀 단위의 상단/하단 스크롤 제약
 * @param isActive - 이 리스너가 실행되어야 하는 경우 'true'
 */
export default function useWheelScroll(ref, y, constraints, onWheelCallback, isActive) {
  const onWheel = event => {
    event.preventDefault()

    const currentY = y.get()
    let newY = currentY - event.deltaY
    let startedAnimation = false
    const isWithinBounds = constraints && newY >= constraints.top && newY <= constraints.bottom

    if (constraints && !isWithinBounds) {
      newY = mix(currentY, newY, elasticFactor)

      if (newY < constraints.top) {
        if (event.deltaY <= deltaThreshold) {
          springTo(y, newY, constraints.top)
          startedAnimation = true
        } else {
          debouncedSpringTo(y, newY, constraints.top)
        }
      }

      if (newY > constraints.bottom) {
        if (event.deltaY >= -deltaThreshold) {
          springTo(y, newY, constraints.bottom)
          startedAnimation = true
        } else {
          debouncedSpringTo(y, newY, constraints.bottom)
        }
      }
    }

    if (!startedAnimation) {
      y.stop()
      y.set(newY)
    } else {
      debouncedSpringTo.cancel()
    }

    onWheelCallback(event)
  }

  useDomEvent(ref, 'wheel', isActive && onWheel, { passive: false })
}
