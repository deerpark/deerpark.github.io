import { forwardRef } from 'react'
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { inviewVariants } from '../../../config'

function Para(
  { icon, iconSize = 'xl', title, desc, className = '', isLast = false, p = [], odd = false, divider = false },
  paraRef
) {
  const cx = classnames(
    'px-7 pt-10',
    className,
    odd && 'bg-gray-50 dark:bg-gray-700 dark:bg-opacity-10',
    !isLast && divider && 'border-b border-gray-100 dark:border-opacity-10'
  )
  return (
    <div className={cx} ref={paraRef}>
      <InView>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={inviewVariants}
            className='flex items-center space-x-5 pb-5'>
            <div className='w-12 h-12 flex justify-center items-center rounded-3xl bg-blue-600 dark:bg-opacity-50'>
              <FontAwesomeIcon className='text-white dark:text-opacity-70' icon={icon} size={iconSize} />
            </div>
            <div className=''>
              {title && (
                <h2 className='text-xl text-gray-600 dark:text-gray-400'>
                  <span className='font-title'>{title}</span>
                </h2>
              )}
              {desc && <p className='text-xs text-gray-500'>{desc}</p>}
            </div>
          </motion.div>
        )}
      </InView>
      {p.map(para => (
        <InView>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
              variants={inviewVariants}
              className='pb-5 pl-0 xs:pl-16 ml-1.5 leading-normal text-justify'>
              {para}
            </motion.div>
          )}
        </InView>
      ))}
      {isLast ? <div className='mt-5 h-20' /> : <div className='mt-5 pb-10' />}
    </div>
  )
}

export default forwardRef(Para)