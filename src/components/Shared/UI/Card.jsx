import { forwardRef } from 'react'
import classNames from 'classnames'

function Card({ children, className = '', p, rounded = 'sm:rounded-3xl', shadow = 'sm:shadow-lg' }, ref) {
  const classes = classNames(
    'bg-white dark:bg-black sm:dark:border xs:dark:border-black xs:dark:border-opacity-5',
    className,
    p,
    shadow,
    rounded
  )
  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  )
}

export default forwardRef(Card)
