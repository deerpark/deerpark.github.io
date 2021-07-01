/* eslint-disable import/prefer-default-export */
import * as React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'
import { motion } from 'framer-motion'

export const ContentPlaceholder = React.memo(() => (
  <motion.div layout className='content-container' style={{ originY: 0, originX: 0 }}>
    <LoremIpsum p={6} avgWordsPerSentence={6} avgSentencesPerParagraph={4} />
  </motion.div>
))
