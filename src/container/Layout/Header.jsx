import { useCallback, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { titleStickyState } from '../../states'
import Button from '../../components/Shared/UI/Button'
import Tabs from '../../components/Shared/UI/Tabs'
import ProfileTabs from '../Profile/Tabs'
import { routes, magicPopupVariants, fadeInVariants } from '../../config'
import useLocalStorage from '../../hooks/use-localstorage'

const profileRoutes = Object.keys(routes).filter(f => f.includes('/profile'))

function Header({ location }) {
  const [theme, setTheme] = useLocalStorage('theme', 2)
  const [magicPopup, setMagicPopup] = useState(false)
  const { pathname } = location
  const titleSticky = useRecoilValue(titleStickyState)
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
  return (
    <>
      <header className='safe-area-inset-padding-top flex items-center transition-all sm:rounded-t-3xl dark:border-b dark:border-gray-500 dark:border-opacity-10'>
        <motion.div
          initial={{ y: -32, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='w-full relative z-20 flex flex-col'>
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
          <AnimatePresence>
            {pathname.includes('/profile') && (
              <ProfileTabs value={profileRoutes.indexOf(pathname) < 0 ? 0 : profileRoutes.indexOf(pathname)} />
            )}
          </AnimatePresence>
        </motion.div>
        <div className='status-bar-style' />
      </header>
      <AnimatePresence>
        {magicPopup && (
          <motion.div
            key='backdrop'
            initial='enter'
            animate={magicPopup ? 'visible' : 'enter'}
            variants={fadeInVariants}
            exit='exit'
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
          className='absolute z-50 safe-area-inset-margin-top inset-7 bottom-auto p-7 space-y-7 flex flex-col items-stretch rounded-3xl shadow-xl bg-white dark:bg-gray-800'>
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
