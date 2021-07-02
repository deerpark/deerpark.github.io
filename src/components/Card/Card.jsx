/* eslint-disable import/prefer-default-export */
import { memo, useEffect, useRef, useCallback } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContentPlaceholder } from './ContentPlaceholder'
import { slideUpXDelayedVariants } from '../../config/variants'
import Button from '../Shared/UI/Button'

export const Card = memo(
  ({ isSelected, id, home, title, category, image, history }) => {
    const ref = useRef(null)
    const handleOpenCard = useCallback(() => {
      if (ref.current) ref.current.style.zIndex = 60
    }, [])
    const handleCloseCard = useCallback(() => {
      setTimeout(() => {
        if (ref.current) ref.current.style.zIndex = 0
      }, 500)
    }, [])
    useEffect(() => {
      if (history.location.pathname === id && ref.current) {
        ref.current.style.zIndex = 60
      }
    }, [id, history.location.pathname])
    return (
      <motion.li className='h-40' variants={slideUpXDelayedVariants}>
        <Overlay isSelected={isSelected} />
        <motion.div
          ref={ref}
          layout
          className={clsx(
            isSelected ? 'fixed inset-2 sm:inset-0 overflow-y-auto rounded-3xl' : 'relative w-full h-full'
          )}>
          <motion.div
            layout
            className={clsx(
              isSelected
                ? 'layout w-full h-full relative base:p-7 base:flex base:justify-center base:items-center'
                : 'w-full h-full rounded-3xl'
            )}>
            {isSelected && <Link className='fixed inset-0 z-0' to={home} />}
            <motion.div
              layout
              className={clsx(
                'w-full h-full relative z-0 rounded-3xl shadow-2xl',
                isSelected
                  ? 'min-w-full max-w-full base:min-w-xs base:max-w-xs base:max-h-md2 safe-area-inset-margin-top'
                  : 'overflow-hidden'
              )}>
              <motion.div
                layout
                className={clsx(
                  'rounded-3xl overflow-hidden',
                  isSelected ? 'relative inset-auto shadow-2xl' : 'absolute inset-0'
                )}>
                {isSelected && (
                  <Link to={home} className='absolute right-7 top-7 z-50'>
                    <Button as='button' type='button' width='w-8' onClick={handleCloseCard}>
                      <FontAwesomeIcon icon={['fas', 'xmark']} />
                    </Button>
                  </Link>
                )}
                <motion.div layout className='absolute left-7 top-7 z-20 w-screen max-w-sm pointer-events-none'>
                  <motion.div layout className='text-white text-xs text-shadow'>
                    {category}
                  </motion.div>
                  <motion.h2 layout className='text-white font-bold text-2xl text-shadow'>
                    {title}
                  </motion.h2>
                </motion.div>
                <motion.div
                  layout
                  className='h-60 absolute left-0 top-0 right-0 z-10 rounded-t-3xl overflow-hidden'
                  style={{ minWidth: 424, maxWidth: 524 }}>
                  <Link to={id} onClick={handleOpenCard}>
                    <img
                      className={clsx(
                        'h-60 w-full object-cover transition-all rounded-t-3xl transform ease-out',
                        isSelected ? 'duration-10000 hover:scale-150' : 'duration-500 hover:scale-110'
                      )}
                      src={`https://images.unsplash.com/${image}&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80`}
                      alt=''
                    />
                  </Link>
                </motion.div>
                <motion.div className='pt-60 pb-7 bg-white dark:bg-gray-800 rounded-3xl'>
                  <motion.div layout className='p-7 w-card-sm base:w-card min-h-md_'>
                    <ContentPlaceholder id={id} />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.li>
    )
  },
  (prev, next) => prev.isSelected === next.isSelected
)

const Overlay = ({ isSelected }) => (
  <motion.div
    initial={false}
    animate={{ opacity: isSelected ? 1 : 0 }}
    transition={{ duration: 0.2 }}
    style={{ pointerEvents: isSelected ? 'auto' : 'none' }}
    className='absolute inset-0 bottom-16 sm:bottom-0 z-50 backdrop-filter backdrop-blur-sm bg-gray-500 dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-30'
  />
)
