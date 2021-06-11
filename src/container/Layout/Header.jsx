import { useRef, useEffect, useCallback, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useRecoilValue, useRecoilState } from 'recoil'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { titleStickyState, profileTabStickyState } from '../../states'
import Button from '../../components/Shared/UI/Button'
import Tabs from '../../components/Shared/UI/Tabs'
import ProfileTabs from '../Profile/Tabs'
import { routes, magicPopupVariants, fadeInVariants } from '../../config'
import useLocalStorage from '../../hooks/useLocalStorage'

function Header({ history, location }) {
  const [theme, setTheme] = useLocalStorage('theme', 2)
  const [magicPopup, setMagicPopup] = useState(false)
  const { pathname } = location
  const titleSticky = useRecoilValue(titleStickyState)
  const [profileTabSticky, setProfileTabSticky] = useRecoilState(profileTabStickyState)
  const scrollRootRef = useRef()
  const pathnameRef = useRef('/')
  const handleChangeDisplayMode = useCallback(v => {
    if (v === 1 || (v === 2 && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
    if (v !== undefined || v !== null) {
      setTheme(v)
    } else {
      localStorage.removeItem('theme')
    }
  }, [])
  const handleToggleMagic = useCallback(() => {
    setMagicPopup(!magicPopup)
  }, [magicPopup])
  const handleCloseMagic = useCallback(() => {
    setMagicPopup(false)
  }, [magicPopup])
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
    <>
      <header
        className={`header${
          titleSticky ? '--compact shadow-md' : ''
        } fixed base:absolute z-30 inset-0 bottom-auto flex items-center transition-all overflow-hidden sm:rounded-t-3xl dark:border-b dark:border-gray-500 dark:border-opacity-10`}>
        <div className='w-full relative z-20 flex flex-col'>
          <div className='w-full flex items-center p-7'>
            <div className='w-24 flex space-x-4 items-center'>
              <Button as='nav' to='/'>
                <FontAwesomeIcon icon={['fas', 'house-user']} />
              </Button>
            </div>
            <h2
              className={`flex-grow text-center text-xl text-gray-700 dark:text-gray-300 transition-all transform ${
                titleSticky ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-3'
              }`}>
              <span className='font-title'>{routes[pathname]?.title}</span>
            </h2>
            <div className='w-24 flex-none flex space-x-4 justify-end items-center'>
              <Button onClick={handleToggleMagic}>
                <FontAwesomeIcon icon={['fas', 'wand-magic-sparkles']} />
              </Button>
            </div>
          </div>
          <AnimatePresence>{pathname === '/profile' && profileTabSticky && <ProfileTabs />}</AnimatePresence>
        </div>
        <div
          className={`backdrop${
            titleSticky ? '--compact' : ''
          } absolute inset-0 z-10 backdrop-filter backdrop-blur-sm bg-white dark:bg-black bg-opacity-25 dark:bg-opacity-25 pointer-events-none transition-all overflow-hidden sm:rounded-t-3xl`}
        />
        <div className='status-bar-style' />
      </header>
      <AnimatePresence>
        {magicPopup && (
          <motion.div
            key='backdrop'
            initial='hidden'
            animate={magicPopup ? 'visible' : 'hidden'}
            variants={fadeInVariants}
            className='absolute inset-0 z-40 backdrop-filter backdrop-blur-sm bg-gray-500 dark:bg-black bg-opacity-50 dark:bg-opacity-50'
          />
        )}
        <motion.div
          key='magic'
          variants={magicPopupVariants}
          initial='enter'
          animate={magicPopup ? 'center' : 'enter'}
          exit='exit'
          transition={{
            y: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className='absolute z-50 inset-7 bottom-auto p-7 space-y-7 flex flex-col items-stretch rounded-3xl shadow-xl bg-white dark:bg-gray-800'>
          <div className='flex justify-between'>
            <h2 className='font-bold text-gray-900 dark:text-gray-100 text-xl'>설정</h2>
            <div>
              <Button as='button' type='button' width='w-8' onClick={handleCloseMagic}>
                <FontAwesomeIcon icon={['fas', 'xmark']} />
              </Button>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='space-y-3'>
              <h3>화면 모드</h3>
              <div className='inline-block rounded bg-gray-100 dark:bg-gray-900 dark:bg-opacity-50'>
                <Tabs
                  value={theme}
                  stretch
                  onChange={handleChangeDisplayMode}
                  items={[
                    { label: '라이트', value: 0 },
                    { label: '다크', value: 1 },
                    { label: '시스템 설정', value: 2 },
                  ]}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default withRouter(Header)
