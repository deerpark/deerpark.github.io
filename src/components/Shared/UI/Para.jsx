import { forwardRef } from 'react'
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fadeInVariants } from '../../../config'

function ParaContent({ image, title, desc, icon, iconSize, iconClassName, compact, reverse, titleBorderBottom }) {
  return (
    <div className='flex items-center space-x-5'>
      <div
        className={`w-12 h-12 flex-none flex justify-center items-center rounded-3xl overflow-hidden ${
          iconClassName || ''
        }`}>
        {image ? <img src={image} alt='' /> : <FontAwesomeIcon icon={icon} size={iconSize} />}
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
        {desc && <p className={`${reverse ? 'order-1' : 'order-2'} text-xs text-gray-500`}>{desc}</p>}
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
    compact,
    title,
    reverse,
    desc,
    className = '',
    titleBorderBottom,
    isLast = false,
    p = [],
    odd = false,
    divider = false,
    animate = true,
  },
  paraRef
) {
  const cx = classnames(
    !compact && 'px-7 pt-10',
    className,
    odd && 'bg-gray-50 dark:bg-gray-700 dark:bg-opacity-10',
    !isLast && divider && 'border-b border-gray-100 dark:border-opacity-10'
  )
  return (
    <div className={cx} ref={paraRef}>
      {animate ? (
        <InView>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeInVariants}
              className='flex items-center space-x-5 pb-5'>
              <ParaContent
                image={image}
                title={title}
                desc={desc}
                icon={icon}
                compact={compact}
                titleBorderBottom={titleBorderBottom}
                reverse={reverse}
                iconSize={iconSize}
                iconClassName={iconClassName}
              />
            </motion.div>
          )}
        </InView>
      ) : (
        <ParaContent
          image={image}
          title={title}
          desc={desc}
          icon={icon}
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
            <motion.div
              ref={ref}
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeInVariants}
              className='pb-5 pl-0 xs:pl-16 ml-1.5 leading-normal text-justify'>
              {para}
            </motion.div>
          )}
        </InView>
      ))}
      {isLast ? <div className='mt-5 h-20' /> : <div className={compact ? 'hidden' : 'mt-5 pb-10'} />}
    </div>
  )
}

export default forwardRef(Para)
