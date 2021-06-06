import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fadeInVariants } from '../../../config'

export default function Empty({ msg, icon }) {
  return (
    <InView>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInVariants}
          className='text-center flex flex-col space-y-7 items-center'>
          {icon && <FontAwesomeIcon className='opacity-50' icon={icon} size='6x' />}
          <span className='opacity-50'>{msg}</span>
        </motion.div>
      )}
    </InView>
  )
}
