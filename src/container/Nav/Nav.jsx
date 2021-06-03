import Button from '../../components/Button/Button'
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile.svg'
import { ReactComponent as CareerIcon } from '../../assets/icons/career.svg'
import { ReactComponent as StrengthIcon } from '../../assets/icons/strength.svg'
import { ReactComponent as TechIcon } from '../../assets/icons/tech.svg'

export default function Nav() {
  return (
    <div className='nav absolute z-10 left-0 right-0 bottom-0 h-16 bg-blue-600 rounded-none sm:rounded-b-3xl'>
      <menu className='h-full p-0 m-0 grid grid-flow-col grid-cols-4 grid-rows-1 place-items-stretch gap-px divide-x divide-white divide-opacity-5'>
        <div className='flex justify-center items-stretch p-2'>
          <Button
            as='nav'
            to='/profile'
            activeClassName='active'
            className='nav-link flex-col space-y-1.5'
            theme='menu'
            width='w-full'
            height='h-full'
            rounded='rounded sm:rounded-bl-2xl sm:hover:rounded-bl-2xl sm:focus:rounded-bl-2xl'>
            <ProfileIcon className='w-8 h-5' />
            <span className='text-2xs whitespace-nowrap'>김용만</span>
          </Button>
        </div>
        <div className='flex justify-center items-stretch p-2'>
          <Button
            as='nav'
            to='/career'
            activeClassName='active'
            className='nav-link flex-col space-y-1.5'
            theme='menu'
            width='w-full'
            height='h-full'
            rounded='rounded'>
            <CareerIcon className='w-8 h-5' />
            <span className='text-2xs whitespace-nowrap'>경력</span>
          </Button>
        </div>
        <div className='flex justify-center items-stretch p-2'>
          <Button
            as='nav'
            to='/strength'
            className='nav-link flex-col space-y-1.5'
            theme='menu'
            width='w-full'
            height='h-full'
            rounded='rounded'>
            <StrengthIcon className='w-8 h-5' />
            <span className='text-2xs whitespace-nowrap'>강점</span>
          </Button>
        </div>
        <div className='flex justify-center items-stretch p-2'>
          <Button
            as='nav'
            to='/tech'
            activeClassName='active'
            className='nav-link flex-col space-y-1.5'
            theme='menu'
            width='w-full'
            height='h-full'
            rounded='rounded sm:rounded-br-2xl sm:hover:rounded-br-2xl sm:focus:rounded-br-2xl'>
            <TechIcon className='w-8 h-5' />
            <span className='text-2xs whitespace-nowrap'>기술</span>
          </Button>
        </div>
      </menu>
    </div>
  )
}
