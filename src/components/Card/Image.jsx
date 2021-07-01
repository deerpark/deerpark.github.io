/* eslint-disable import/prefer-default-export */
import * as React from 'react'
import { motion } from 'framer-motion'
import { closeSpring } from '../../config/variants'

export const Image = ({ id, isSelected, pointOfInterest = 0, backgroundColor }) => (
  <motion.div layout className='card-image-container' style={{ backgroundColor, originX: 0, originY: 0 }}>
    <motion.img
      className='card-image'
      src={`images/${id}.jpg`}
      alt=''
      initial={false}
      animate={isSelected ? { x: -20, y: -20 } : { x: -pointOfInterest, y: 0 }}
      transition={closeSpring}
    />
  </motion.div>
)
