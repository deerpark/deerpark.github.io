/* eslint-disable no-nested-ternary */
import { forwardRef, useMemo } from 'react'
import { InView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fadeInVariants } from '../../../config'

const COLORS = [
  'text-blue-300',
  'text-blue-400',
  'text-blue-500',
  'text-blue-600',
  'text-blue-700',
  'text-blue-800',
  'text-blue-900',
]

function Rating({ rating }) {
  const unRatingArray = useMemo(() => [].fill.call({ length: 5 - rating || 0 }, null), [])
  const ratingArray = useMemo(() => [].fill.call({ length: rating || 0 }, null), [])
  return (
    <span className='flex space-x-px py-1'>
      {Object.keys(ratingArray)
        .filter(k => k !== 'length')
        ?.map((r, i) => (
          <FontAwesomeIcon className={COLORS[i]} icon={['fas', 'star']} size='xs' key={i.toString()} />
        ))}
      {Object.keys(unRatingArray)
        .filter(k => k !== 'length')
        ?.map((r, i) => (
          <FontAwesomeIcon
            className='text-gray-200 dark:text-gray-800'
            icon={['fas', 'star']}
            size='xs'
            key={i.toString()}
          />
        ))}
    </span>
  )
}

function ParaContent({
  image,
  title,
  desc,
  rating,
  svg,
  icon,
  iconSize,
  iconClassName,
  iconStyle,
  compact,
  reverse,
  titleBorderBottom,
}) {
  return (
    <div className='flex items-center space-x-5'>
      <div
        className={`w-12 h-12 flex-none flex justify-center items-center rounded-md overflow-hidden ${
          iconClassName || ''
        }`}
        style={iconStyle}>
        {svg && svg}
        {!svg && (image ? <img src={image} alt='' /> : icon ? <FontAwesomeIcon icon={icon} size={iconSize} /> : '')}
      </div>
      <div className='flex-grow flex flex-col items-stretch'>
        {title && (
          <h2
            className={`${compact ? 'text-base' : 'text-xl'} ${
              compact && titleBorderBottom
                ? 'pb-5 border-b border-gray-200 border-opacity-50 dark:border-opacity-5'
                : ''
            } ${reverse ? 'order-2' : 'order-1'} text-gray-600 dark:text-gray-400`}>
            <span className='font-title'>{title}</span>
          </h2>
        )}
        {(desc || rating) && (
          <p className={`${reverse ? 'order-1' : 'order-2'} text-xs text-gray-500`}>
            {desc || <Rating rating={rating} />}
          </p>
        )}
      </div>
    </div>
  )
}

function Para(
  {
    icon,
    iconSize = 'lg',
    iconClassName = 'text-gray-500 dark:text-opacity-70 bg-gray-200 dark:bg-gray-800 bg-opacity-50',
    image,
    svg,
    compact,
    title,
    reverse,
    desc,
    rating,
    className = '',
    titleBorderBottom,
    isLast = false,
    p = [],
    odd = false,
    divider = false,
    animate = true,
    iconStyle,
    py = 'py-10',
    px = 'px-7',
  },
  paraRef
) {
  const cx = classnames(
    !compact && px,
    !compact && py,
    className,
    odd && 'bg-gray-50 dark:bg-gray-700 dark:bg-opacity-10',
    !isLast && divider && 'border-b border-gray-100 dark:border-opacity-10'
  )
  return (
    <div className={cx} ref={paraRef}>
      {animate ? (
        <InView>
          {({ inView, ref }) => (
            <AnimatePresence>
              <motion.div
                ref={ref}
                initial='enter'
                animate={inView ? 'visible' : 'enter'}
                exit='exit'
                variants={fadeInVariants}
                className='flex items-center space-x-5 pb-5'>
                <ParaContent
                  image={image}
                  title={title}
                  desc={desc}
                  rating={rating}
                  icon={icon}
                  svg={svg}
                  iconStyle={iconStyle}
                  compact={compact}
                  titleBorderBottom={titleBorderBottom}
                  reverse={reverse}
                  iconSize={iconSize}
                  iconClassName={iconClassName}
                />
              </motion.div>
            </AnimatePresence>
          )}
        </InView>
      ) : (
        <ParaContent
          image={image}
          title={title}
          desc={desc}
          rating={rating}
          icon={icon}
          svg={svg}
          iconStyle={iconStyle}
          compact={compact}
          titleBorderBottom={titleBorderBottom}
          reverse={reverse}
          iconSize={iconSize}
          iconClassName={iconClassName}
        />
      )}
      {p?.map((para, i) => (
        <InView key={i.toString()}>
          {({ inView, ref }) => (
            <AnimatePresence>
              <motion.div
                ref={ref}
                initial='enter'
                animate={inView ? 'visible' : 'enter'}
                variants={fadeInVariants}
                exit='exit'
                className='pb-5 pl-0 xs:pl-16 ml-1.5 leading-normal'>
                {para}
              </motion.div>
            </AnimatePresence>
          )}
        </InView>
      ))}
      {isLast ? <div className='mt-5 h-20' /> : <div className={compact || py ? 'hidden' : 'h-5'} />}
    </div>
  )
}

export default forwardRef(Para)
