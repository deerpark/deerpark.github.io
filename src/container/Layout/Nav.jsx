import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../components/Shared/UI/Button'

export default function Nav() {
  return (
    <div className='nav h-16 flex-none flex justify-center bg-blue-600 dark:bg-black dark:border-t dark:border-white dark:border-opacity-10 rounded-t-md sm:rounded-b-3xl'>
      <menu className='h-full w-full p-0 m-0 flex justify-between items-stretch gap-px divide-x divide-white divide-opacity-5'>
        <div className='flex-1 flex-grow flex justify-center items-stretch p-2'>
          <Button
            as='nav'
            to='/profile'
            activeClassName='active'
            className='nav-link flex-col space-y-1.5 px-6'
            theme='menu'
            width='w-full'
            height='h-full'
            rounded='rounded sm:rounded-bl-2xl sm:hover:rounded-bl-2xl sm:focus:rounded-bl-2xl'>
            <FontAwesomeIcon icon={['fas', 'image-polaroid-user']} />
            <span className='text-2xs whitespace-nowrap'>프로필</span>
          </Button>
        </div>
        <div className='flex-1 flex-grow flex justify-center items-stretch p-2'>
          <Button
            as='nav'
            to='/ux'
            activeClassName='active'
            className='nav-link flex-col space-y-1.5 px-6'
            theme='menu'
            width='w-full'
            height='h-full'
            rounded='rounded'>
            <FontAwesomeIcon icon={['fas', 'head-side']} />
            <span className='text-2xs whitespace-nowrap'>UX</span>
          </Button>
        </div>
        <div className='flex-1 flex-grow flex justify-center items-stretch p-2'>
          <Button
            as='nav'
            to='/dev'
            className='nav-link flex-col space-y-1.5 px-6'
            theme='menu'
            width='w-full'
            height='h-full'
            rounded='rounded'>
            <FontAwesomeIcon icon={['fas', 'laptop-code']} />
            <span className='text-2xs whitespace-nowrap'>개발</span>
          </Button>
        </div>
        <div className='flex-1 flex-grow flex justify-center items-stretch p-2'>
          <Button
            as='nav'
            to='/design'
            activeClassName='active'
            className='nav-link flex-col space-y-1.5 px-6'
            theme='menu'
            width='w-full'
            height='h-full'
            rounded='rounded sm:rounded-br-2xl sm:hover:rounded-br-2xl sm:focus:rounded-br-2xl'>
            <FontAwesomeIcon icon={['fas', 'swatchbook']} />
            <span className='text-2xs whitespace-nowrap'>디자인</span>
          </Button>
        </div>
      </menu>
    </div>
  )
}
