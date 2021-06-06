import { useRef, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useRecoilValue, useRecoilState } from 'recoil'
import { AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { titleStickyState, profileTabStickyState } from '../../states'
import Button from '../../components/Shared/UI/Button'
import ProfileTabs from '../Profile/Tabs'

const TITLE = {
  '/': '홈',
  '/profile': '김용만',
  '/ux': 'UX',
  '/dev': '개발',
  '/design': '디자인',
}

function Header({ history, location }) {
  const { pathname } = location
  const titleSticky = useRecoilValue(titleStickyState)
  const [profileTabSticky, setProfileTabSticky] = useRecoilState(profileTabStickyState)
  const scrollRootRef = useRef()
  const pathnameRef = useRef('/')
  useEffect(() => {
    if (history.action === 'POP') {
      return
    }
    // In all other cases, check fragment/scroll to top
    if (location.pathname !== pathnameRef.current) {
      if (scrollRootRef.current) {
        scrollRootRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
        setProfileTabSticky(false)
      }
      pathnameRef.current = location.pathname
    }
  })
  useEffect(() => {
    scrollRootRef.current = document.querySelector('.ScrollbarsCustom-Content')
  }, [])
  return (
    <header
      className={`header${
        titleSticky ? '--compact shadow-md' : ''
      } fixed base:absolute z-50 inset-0 bottom-auto flex items-center transition-all overflow-hidden sm:rounded-t-3xl`}>
      <div className='w-full relative z-20 flex flex-col'>
        <div className='w-full flex items-center p-7'>
          <div className='w-24 flex space-x-4 items-center'>
            {/* <Button as='nav' to='/'>
              <FontAwesomeIcon icon={['fas', 'bars']} />
            </Button> */}
          </div>
          <h2
            className={`flex-grow text-center text-xl text-gray-700 dark:text-gray-300 transition-all transform ${
              titleSticky ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-3'
            }`}>
            <span className='font-title'>{TITLE[pathname]}</span>
          </h2>
          <div className='w-24 flex-none flex space-x-4 justify-end items-center'>
            <Button>
              <FontAwesomeIcon icon={['fas', 'wand-magic-sparkles']} />
            </Button>
          </div>
        </div>
        <AnimatePresence>{pathname === '/profile' && profileTabSticky && <ProfileTabs />}</AnimatePresence>
      </div>
      <div
        className={`backdrop${
          titleSticky ? '--compact' : ''
        } absolute inset-0 z-10 backdrop-filter backdrop-blur-sm bg-white dark:bg-black bg-opacity-25 pointer-events-none transition-all overflow-hidden sm:rounded-t-3xl`}
      />
      <div className='status-bar-style' />
    </header>
  )
}

export default withRouter(Header)
