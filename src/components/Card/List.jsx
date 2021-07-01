import { memo } from 'react'
import { motion } from 'framer-motion'
import { Card } from './Card'
import { parentVariants } from '../../config'

const List = memo(({ contents, match, history, home }) => (
  <motion.ul
    className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-7 mx-7'
    initial='hidden'
    animate='visible'
    variants={parentVariants}>
    {contents?.map(card => (
      <Card home={home} key={card.id} isSelected={match.url === card.id} history={history} {...card} />
    ))}
  </motion.ul>
))

export default List
