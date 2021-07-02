/* eslint-disable import/prefer-default-export */
import * as React from 'react'
import { memo } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContentPlaceholder } from './ContentPlaceholder'
import { slideUpXDelayedVariants, openSpring, closeSpring } from '../../config/variants'
import Button from '../Shared/UI/Button'

export const Card = memo(
  ({ isSelected, id, home, title, category, image /* history, */ }) => (
    <motion.li className='h-40' variants={slideUpXDelayedVariants}>
      <Overlay isSelected={isSelected} home={home} />
      <motion.div
        layout
        layoutTransition={isSelected ? openSpring : closeSpring}
        className={clsx(isSelected ? 'absolute inset-x-7 top-20 bottom-20 z-50' : 'w-full h-full relative')}>
        <motion.div
          layout
          layoutTransition={isSelected ? openSpring : closeSpring}
          className='absolute inset-0 rounded-3xl overflow-hidden'
          style={{ zIndex: isSelected ? 60 : 0 }}>
          {!isSelected && <Link to={id} className='absolute inset-0 z-50' />}
          {isSelected && (
            <Link to={home} className='absolute right-7 top-7 z-50'>
              <Button as='button' type='button' width='w-8'>
                <FontAwesomeIcon icon={['fas', 'xmark']} />
              </Button>
            </Link>
          )}
          <motion.div
            layout
            layoutTransition={isSelected ? openSpring : closeSpring}
            className='absolute left-7 top-7 z-20 w-screen max-w-sm'>
            <div className='text-white text-xs text-shadow'>{category}</div>
            <div className='text-white font-bold text-2xl text-shadow'>{title}</div>
          </motion.div>
          <motion.div
            layout
            layoutTransition={isSelected ? openSpring : closeSpring}
            className='absolute left-0 top-0 z-10 h-40 overflow-hidden'
            style={{ minWidth: 424, maxWidth: 524 }}>
            <motion.img
              layout
              layoutTransition={isSelected ? openSpring : closeSpring}
              className='absolute left-0 top-0 right-auto bottom-auto h-40 object-cover'
              src={`https://images.unsplash.com/${image}&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80`}
              alt=''
              style={{ minWidth: 424, maxWidth: 524 }}
            />
          </motion.div>
          <motion.div
            layout
            layoutTransition={isSelected ? openSpring : closeSpring}
            className='pt-40 pb-7 bg-white dark:bg-gray-800 rounded-3xl'>
            <motion.div
              layout
              layoutTransition={isSelected ? openSpring : closeSpring}
              className='p-7 min-w-320 sm:min-w-344 overflow-y-auto'
              style={{ minHeight: 194, maxHeight: 394 }}>
              <ContentPlaceholder id={id} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.li>
  ),
  (prev, next) => prev.isSelected === next.isSelected
)

const Overlay = ({ isSelected, home }) => (
  <motion.div
    initial={false}
    animate={{ opacity: isSelected ? 1 : 0 }}
    transition={{ duration: 0.2 }}
    style={{ pointerEvents: isSelected ? 'auto' : 'none' }}
    className='absolute inset-0 z-40 backdrop-filter backdrop-blur-sm bg-gray-500 dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-30'>
    <Link className='absolute inset-0' to={home} />
  </motion.div>
)
