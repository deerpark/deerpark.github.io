/* eslint-disable import/prefer-default-export */
import * as React from 'react'
import { motion } from 'framer-motion'
import { Empty } from '../Shared/UI'

export const ContentPlaceholder = React.memo(() => (
  <motion.div layout className='content-container' style={{ originY: 0, originX: 0 }}>
    <Empty className='py-20' msg='데이터가 없습니다.' spin icon={['fat', 'empty-set']} />
  </motion.div>
))
