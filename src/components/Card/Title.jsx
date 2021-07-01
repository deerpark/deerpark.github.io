/* eslint-disable import/prefer-default-export */
import * as React from 'react'
import { motion } from 'framer-motion'
import { closeSpring, openSpring } from '../../config/variants'

export const Title = ({ title, category, isSelected }) => {
  const x = isSelected ? 30 : 15
  const y = x

  return (
    <motion.div
      className='title-container'
      layout
      initial={false}
      animate={{ x, y }}
      transition={isSelected ? openSpring : closeSpring}
      transformTemplate={scaleTranslate}
      style={{ originX: 0, originY: 0 }}>
      <span className='category'>{category}</span>
      <h2>{title}</h2>
    </motion.div>
  )
}

const scaleTranslate = ({ x, y, scaleX, scaleY }) =>
  `scaleX(${scaleX}) scaleY(${scaleY}) translate(${x}, ${y}) translateZ(0)`
