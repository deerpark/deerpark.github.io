import classNames from 'classnames'
import { useEffect, useRef } from 'react'
import { useSpring, animated } from '@react-spring/web'
import useMeasure from 'react-use-measure'
import { ResizeObserver } from '@juggle/resize-observer'
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg'
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg'
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile.svg'
import { ReactComponent as CareerIcon } from '../../assets/icons/career.svg'
import { ReactComponent as StrengthIcon } from '../../assets/icons/strength.svg'
import { ReactComponent as TechIcon } from '../../assets/icons/tech.svg'
import Button from '../Button/Button'
import Card from '../Card/Card'

function Profile() {
  const isScrolled = useRef(false)
  const [fixedTitleProps, fixedTitleAnimate] = useSpring(() => ({ config: { duration: 150 }, opacity: 0, y: 10 }))
  const [titleProps, titleAnimate] = useSpring(() => ({ config: { duration: 150 }, opacity: 1, y: 0 }))
  const [parentRef, parentBounds] = useMeasure()
  const [ref, bounds] = useMeasure({ scroll: true, polyfill: ResizeObserver })
  const isScroll = parentBounds.y - bounds.y - 70 > 0
  const navClasses = classNames('absolute left-7 right-7 transition-all', isScrolled.current ? 'top-3' : 'top-7')
  const dropFilterClasses = classNames(
    'absolute z-10 -inset-7 bottom-auto backdrop-filter backdrop-blur-sm bg-white bg-opacity-25 pointer-events-none transition-all',
    isScrolled.current ? 'shadow-md -top-5 h-16' : 'h-24'
  )
  useEffect(() => {
    if (isScrolled.current !== isScroll) {
      isScrolled.current = isScroll
      fixedTitleAnimate.stop()
      if (isScrolled.current) {
        fixedTitleAnimate.start({ opacity: 1, y: 0 })
        titleAnimate.start({ opacity: 0, y: -20 })
      } else {
        fixedTitleAnimate.start({ opacity: 0, y: 10 })
        titleAnimate.start({ opacity: 1, y: 0 })
      }
    }
  }, [isScroll])
  return (
    <Card
      ref={parentRef}
      className='w-full h-full relative sm:min-w-sm sm:max-w-sm sm:max-h-md overflow-hidden'
      p='p-0'
    >
      <div className={navClasses}>
        <div className='relative z-20 flex justify-between'>
          <div className='flex space-x-4 items-center'>
            <Button>
              <HomeIcon />
            </Button>
            <animated.h2 style={fixedTitleProps} className='text-xl text-gray-800 dark:text-gray-200'>
              <span className='font-title'>김용만</span>
            </animated.h2>
          </div>
          <Button>
            <SettingsIcon />
          </Button>
        </div>
        <div className={dropFilterClasses} />
      </div>
      <div className='absolute inset-0 bottom-16 overflow-y-auto'>
        <div className='p-7 pt-24' ref={ref}>
          <animated.div style={titleProps} className='flex flex-col py-10'>
            <h2 className='text-xl text-gray-800 dark:text-gray-200'>
              <span className='font-title'>김용만</span>
            </h2>
            <p className='text-xs text-gray-500'>프론트엔드 엔지니어</p>
          </animated.div>
          <div className='flex justify-center items-center pb-10'>
            <img src='/profile-image.png' alt='' width='205' />
          </div>

          <div className='h-96' />
          <div className='h-96' />
          <div className='h-96' />
        </div>
      </div>
      <div className='absolute left-0 right-0 bottom-0 h-16 bg-blue-600 rounded-none sm:rounded-b-3xl'>
        <menu className='h-full p-0 m-0 grid grid-flow-col grid-cols-4 grid-rows-1 place-items-stretch gap-px divide-x divide-white divide-opacity-5'>
          <div className='flex justify-center items-stretch p-2'>
            <Button
              className='flex-col space-y-1.5'
              theme='menu-active'
              width='w-full'
              height='h-full'
              rounded='rounded sm:rounded-bl-2xl hover:rounded sm:hover:rounded-bl-2xl focus:rounded sm:focus:rounded-bl-2xl'
            >
              <ProfileIcon className='w-8 h-5' />
              <span className='text-2xs whitespace-nowrap'>김용만</span>
            </Button>
          </div>
          <div className='flex justify-center items-stretch p-2'>
            <Button
              className='flex-col space-y-1.5'
              theme='menu'
              width='w-full'
              height='h-full'
              rounded='rounded-none hover:rounded focus:rounded'
            >
              <CareerIcon className='w-8 h-5' />
              <span className='text-2xs whitespace-nowrap'>경력</span>
            </Button>
          </div>
          <div className='flex justify-center items-stretch p-2'>
            <Button
              className='flex-col space-y-1.5'
              theme='menu'
              width='w-full'
              height='h-full'
              rounded='rounded-none hover:rounded focus:rounded'
            >
              <StrengthIcon className='w-8 h-5' />
              <span className='text-2xs whitespace-nowrap'>강점</span>
            </Button>
          </div>
          <div className='flex justify-center items-stretch p-2'>
            <Button
              className='flex-col space-y-1.5'
              theme='menu'
              width='w-full'
              height='h-full'
              rounded='rounded-none sm:rounded-br-2xl hover:rounded sm:hover:rounded-br-2xl focus:rounded sm:focus:rounded-br-2xl'
            >
              <TechIcon className='w-8 h-5' />
              <span className='text-2xs whitespace-nowrap'>기술</span>
            </Button>
          </div>
        </menu>
      </div>
    </Card>
  )
}

export default Profile
