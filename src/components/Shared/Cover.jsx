import clsx from 'clsx'
import { useCallback } from 'react'
import { InView } from 'react-intersection-observer'
import { useRecoilState, useRecoilValue } from 'recoil'
import { motion } from 'framer-motion'
import { slideInXVariants, slideInXDefaultVariants } from '../../config'
import { titleStickyState, containerHeightState } from '../../states'

export default function Cover({
  icon,
  className,
  title,
  minHeight = true,
  subTitle,
  dense,
  mb = 'mb-36',
  setStickyAnyState = () => {},
}) {
  const [, setTitleSticky] = useRecoilState(titleStickyState)
  const containerHeight = useRecoilValue(containerHeightState)
  const handleStickyTitle = useCallback(inview => {
    setTitleSticky(!inview)
    setStickyAnyState(inview)
  }, [])
  return (
    <div
      className={`flex flex-col justify-center items-stretch ${className || ''}`}
      style={{ minHeight: minHeight ? `calc(${containerHeight}px - 64px)` : 0 }}>
      {icon && (
        <InView>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
              variants={slideInXVariants}
              className={`profile-image flex justify-center items-center pt-10 ${dense ? 'pb-5' : 'pb-16'}`}>
              {icon}
            </motion.div>
          )}
        </InView>
      )}
      <InView onChange={handleStickyTitle}>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={slideInXDefaultVariants}
            className={clsx(mb, 'text-3xl text-center')}>
            {title && (
              <h2 className='text-3xl text-gray-600 dark:text-gray-400'>
                <span className='font-title'>{title}</span>
              </h2>
            )}
            {subTitle && <p className='text-sm text-gray-500'>{subTitle}</p>}
          </motion.div>
        )}
      </InView>
    </div>
  )
}
