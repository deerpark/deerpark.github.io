import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { inviewVariants } from '../config'

export default function Tech() {
  return (
    <>
      <div className='h-screen flex flex-col justify-center items-stretch'>
        <InView>
          {({ inView, ref, entry }) => (
            <motion.div
              ref={ref}
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
              variants={inviewVariants}
              className='profile-image flex justify-center items-center pt-10 pb-16'>
              <FontAwesomeIcon className='text-blue-600 dark:text-opacity-70' icon={['fat', 'laptop-code']} size='6x' />
            </motion.div>
          )}
        </InView>
        <InView>
          {({ inView, ref, entry }) => (
            <motion.div
              ref={ref}
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
              variants={inviewVariants}
              className='text-3xl pb-40 text-center'>
              <h2 className='text-3xl text-gray-600 dark:text-gray-400'>
                <span className='font-title'>기술</span>
              </h2>
              <p className='text-sm text-gray-500'>기술 스택</p>
            </motion.div>
          )}
        </InView>
      </div>
      <div className='h-96' />
    </>
  )
}
