import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

function Card({ children, className = '', p, rounded = 'sm:rounded-3xl', shadow = 'sm:shadow-lg' }, ref) {
  return (
    <motion.div
      ref={ref}
      className={clsx(
        'bg-white dark:bg-black sm:dark:border xs:dark:border-black xs:dark:border-opacity-5',
        className,
        p,
        shadow,
        rounded
      )}>
      {children}
    </motion.div>
  )
}

export default forwardRef(Card)
