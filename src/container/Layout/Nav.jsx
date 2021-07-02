import clsx from 'clsx'
import { useRouteMatch } from 'react-router-dom'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../components/Shared/UI/Button'

const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
}

export default function Nav() {
  return (
    <motion.div
      initial={{ y: 64 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.6, ease: 'easeOut' }}
      className='nav relative z-30 h-16 flex-none flex justify-center bg-blue-600 dark:bg-black dark:border-t dark:border-white dark:border-opacity-10 rounded-t-md sm:rounded-b-3xl'>
      <menu className='h-full w-full p-0 m-0 flex justify-between items-stretch gap-px divide-x divide-white divide-opacity-5'>
        <AnimateSharedLayout>
          <div className='nav-item flex-1 flex-grow flex justify-center items-stretch relative'>
            <Button
              as='nav'
              to='/profile'
              className={clsx('nav-link flex-col', useRouteMatch('/profile') ? 'text-blue-600 dark:text-black' : '')}
              theme='menu'
              width='w-full'
              height='h-full'
              rounded='rounded sm:rounded-bl-2xl sm:hover:rounded-bl-2xl sm:focus:rounded-bl-2xl'>
              <FontAwesomeIcon className='relative z-10 mb-1.5' icon={['fas', 'image-polaroid-user']} />
              <span className='text-2xs whitespace-nowrap relative z-10'>프로필</span>
              {useRouteMatch('/profile') && (
                <motion.span
                  initial={false}
                  transition={spring}
                  layoutId='nav-link-active'
                  className='nav-link-active z-0'
                />
              )}
            </Button>
          </div>
          <div className='nav-item flex-1 flex-grow flex justify-center items-stretch relative'>
            <Button
              as='nav'
              to='/ux'
              className={clsx('nav-link flex-col', useRouteMatch('/ux') ? 'text-blue-600 dark:text-black' : '')}
              theme='menu'
              width='w-full'
              height='h-full'
              rounded='rounded'>
              <FontAwesomeIcon className='relative z-10 mb-1.5' icon={['fas', 'head-side']} />
              <span className='text-2xs whitespace-nowrap relative z-10'>UX</span>
              {useRouteMatch('/ux') && (
                <motion.span
                  initial={false}
                  transition={spring}
                  layoutId='nav-link-active'
                  className='nav-link-active z-0'
                />
              )}
            </Button>
          </div>
          <div className='nav-item flex-1 flex-grow flex justify-center items-stretch relative'>
            <Button
              as='nav'
              to='/dev'
              className={clsx('nav-link flex-col', useRouteMatch('/dev') ? 'text-blue-600 dark:text-black' : '')}
              theme='menu'
              width='w-full'
              height='h-full'
              rounded='rounded'>
              <FontAwesomeIcon className='relative z-10 mb-1.5' icon={['fas', 'laptop-code']} />
              <span className='text-2xs whitespace-nowrap relative z-10'>개발</span>
              {useRouteMatch('/dev') && (
                <motion.span
                  initial={false}
                  transition={spring}
                  layoutId='nav-link-active'
                  className='nav-link-active z-0'
                />
              )}
            </Button>
          </div>
          <div className='nav-item flex-1 flex-grow flex justify-center items-stretch relative'>
            <Button
              as='nav'
              to='/design'
              className={clsx('nav-link flex-col', useRouteMatch('/design') ? 'text-blue-600 dark:text-black' : '')}
              theme='menu'
              width='w-full'
              height='h-full'
              rounded='rounded sm:rounded-br-2xl sm:hover:rounded-br-2xl sm:focus:rounded-br-2xl'>
              <FontAwesomeIcon className='relative z-10 mb-1.5' icon={['fas', 'swatchbook']} />
              <span className='text-2xs whitespace-nowrap relative z-10'>디자인</span>
              {useRouteMatch('/design') && (
                <motion.span
                  initial={false}
                  transition={spring}
                  layoutId='nav-link-active'
                  className='nav-link-active z-0'
                />
              )}
            </Button>
          </div>
        </AnimateSharedLayout>
      </menu>
    </motion.div>
  )
}
