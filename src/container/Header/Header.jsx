import Button from '../../components/Button/Button'
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg'
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg'

export default function Header({ isScrolled }) {
  return (
    <header className={`header${isScrolled ? '--compact' : ''} absolute left-7 right-7 z-20 transition-all`}>
      <div className='relative z-20 flex justify-between'>
        <div className='flex space-x-4 items-center'>
          <Button as='nav' to='/'>
            <HomeIcon />
          </Button>
          <h2
            className={`text-xl text-gray-800 dark:text-gray-200 transition-all transform ${
              isScrolled ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-3'
            }`}>
            <span className='font-title'>김용만</span>
          </h2>
        </div>
        <Button>
          <SettingsIcon />
        </Button>
      </div>
      <div
        className={`backdrop${
          isScrolled ? '--compact shadow-md' : ''
        } absolute z-10 -inset-7 bottom-auto backdrop-filter backdrop-blur-sm bg-white dark:bg-black bg-opacity-25 pointer-events-none transition-all`}
      />
    </header>
  )
}
