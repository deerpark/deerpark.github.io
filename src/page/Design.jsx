/* import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion' */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cover from '../components/Shared/Cover'
import { ReactComponent as AntmanBanner } from '../assets/images/antman.svg'
/* import { fadeInVariants } from '../config' */

export default function Design() {
  return (
    <>
      <Cover
        title='디자인'
        subTitle='디자인 컨텐츠'
        icon={<FontAwesomeIcon className='text-blue-600 dark:text-opacity-70' icon={['fat', 'swatchbook']} size='6x' />}
      />
      <div className='min-h-screen px-7 grid grid-flow-rows place-items-center grid-cols-1 sm:grid-cols-2 auto-rows-max gap-7'>
        <a
          className='flex h-72 sm:h-52 justify-center transform transition-all duration-500 active:scale-95 hover:scale-105 rounded-3xl shadow-3xl overflow-hidden'
          href='https://www.antman.kr'
          target='_blank'>
          <AntmanBanner className='w-full h-full rounded-3xl overflow-hidden' />
        </a>
      </div>
    </>
  )
}
