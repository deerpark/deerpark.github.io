import { useLocation } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { isScrolledState } from '../../states'
import Button from '../../components/Shared/UI/Button'
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg'
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg'

const TITLE = {
  '/': 'Welcome',
  '/profile': '김용만',
  '/career': '경력',
  '/strength': '강점',
  '/tech': '기술',
}

export default function Header() {
  const location = useLocation()
  const isScrolled = useRecoilValue(isScrolledState)
  return (
    <header
      className={`header${
        isScrolled ? '--compact shadow-md' : ''
      } fixed base:absolute z-50 inset-0 bottom-auto flex items-center px-7 transition-all overflow-hidden sm:rounded-t-3xl`}>
      <div className='w-full relative z-20 flex items-center'>
        <div className='w-24 flex space-x-4 items-center'>
          <Button as='nav' to='/'>
            <HomeIcon />
          </Button>
        </div>
        <h2
          className={`flex-grow text-center text-xl text-gray-700 dark:text-gray-300 transition-all transform ${
            isScrolled ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-3'
          }`}>
          <span className='font-title'>{TITLE[location.pathname]}</span>
        </h2>
        <div className='w-24 flex-none flex space-x-4 justify-end items-center'>
          <Button>
            <SettingsIcon />
          </Button>
        </div>
      </div>
      <div
        className={`backdrop${
          isScrolled ? '--compact' : ''
        } absolute inset-0 z-10 backdrop-filter backdrop-blur-sm bg-white dark:bg-black bg-opacity-25 pointer-events-none transition-all overflow-hidden sm:rounded-t-3xl`}
      />
      <div className='status-bar-style' />
    </header>
  )
}
