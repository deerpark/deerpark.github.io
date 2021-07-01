import { InView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fadeInVariants } from '../../../config'

export default function Empty({ className, msg, icon, iconSize = '6x', spin }) {
  return (
    <InView>
      {({ inView, ref }) => (
        <AnimatePresence>
          <motion.div
            ref={ref}
            initial='enter'
            exit='exit'
            animate={inView ? 'visible' : 'enter'}
            variants={fadeInVariants}>
            <div className={`text-center flex flex-col space-y-7 items-center ${className || ''}`}>
              {icon && <FontAwesomeIcon className='opacity-50' icon={icon} size={iconSize} spin={spin} />}
              <span className='opacity-50'>{msg}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </InView>
  )
}
