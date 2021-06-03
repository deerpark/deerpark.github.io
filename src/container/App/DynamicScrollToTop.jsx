import { useEffect, useRef } from 'react'
import { withRouter } from 'react-router-dom'

const DynamicScrollToTop = ({ history, location }) => {
  const pathname = useRef('/')
  useEffect(() => {
    // Keep default behavior of restoring scroll position when user:
    // - clicked back button
    // - clicked on a link that programmatically calls `history.goBack()`
    // - manually changed the URL in the address bar (here we might want
    // to scroll to top, but we can't differentiate it from the others)
    if (history.action === 'POP') {
      return
    }
    // In all other cases, check fragment/scroll to top
    if (location.pathname !== pathname.current) {
      const element = document.querySelector('.ScrollbarsCustom-Content')
      if (element) {
        element.scrollIntoView({ block: 'start', behavior: 'smooth' })
      }
      pathname.current = location.pathname
    }
  })

  return null
}

export default withRouter(DynamicScrollToTop)