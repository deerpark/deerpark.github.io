import { forwardRef } from 'react'
import classNames from 'classnames'

function Card({ children, className = '', p }, ref) {
  const classes = classNames(
    'bg-white dark:bg-black sm:dark:border xs:dark:border-gray-900 xs:dark:border-opacity-50 sm:rounded-3xl sm:shadow-lg',
    className,
    p
  )
  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  )
}

export default forwardRef(Card)
