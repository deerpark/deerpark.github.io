/* eslint-disable import/prefer-default-export */
import * as React from 'react'
import { memo } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ContentPlaceholder } from './ContentPlaceholder'
import { openSpring, closeSpring } from '../../config/variants'

export const Card = memo(
  ({ isSelected, id, title, category, /* history, */ backgroundColor }) => (
    <li className='h-96 sm:h-40 overflow-hidden relative'>
      <Overlay isSelected={isSelected} />
      <div
        className={clsx(
          'flex flex-col items-stretch gap-0 overflow-hidden fixed z-50 -m-7 -mt-28 base:min-w-sm base:max-w-sm base:max-h-md',
          isSelected ? 'w-full h-full' : ''
        )}>
        <motion.div
          className={clsx(isSelected ? 'w-full h-full' : 'h-96 sm:h-40')}
          layout
          layoutTransition={isSelected ? openSpring : closeSpring}>
          <div className='h-96 sm:h-40 rounded-lg' style={{ backgroundColor }}>
            <div>{title}</div>
            <div>{category}</div>
          </div>
          <ContentPlaceholder />
        </motion.div>
      </div>
      {!isSelected && <Link to={id} className='absolute inset-0' />}
    </li>
  ),
  (prev, next) => prev.isSelected === next.isSelected
)

const Overlay = ({ isSelected }) => (
  <motion.div
    initial={false}
    animate={{ opacity: isSelected ? 1 : 0 }}
    transition={{ duration: 0.2 }}
    style={{ pointerEvents: isSelected ? 'auto' : 'none' }}
    className='fixed inset-0 z-40 bg-black bg-opacity-75'>
    <Link className='absolute inset-0' to='/dev' />
  </motion.div>
)
