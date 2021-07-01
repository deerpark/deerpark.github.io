import clsx from 'clsx'
import { Link, NavLink } from 'react-router-dom'

const THEMES = {
  transparent:
    'p-2 text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-300 focus:text-gray-900 dark:focus:text-gray-100 focus:shadow-inset hover:ring-1 hover:ring-yellow-500 focus:ring-4 focus:ring-yellow-500',
  menu: 'px-2 py-0 bg-blue-600 dark:bg-black text-white text-opacity-75 hover:text-opacity-100 focus:text-opacity-100 hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-5',
  primary:
    'p-2 bg-blue-700 text-white hover:bg-blue-500 focus:bg-blue-800 focus:text-blue-200 hover:ring-1 hover:ring-yellow-500 focus:ring-4 focus:ring-yellow-500',
  active:
    'p-2 bg-white text-blue-700 hover:bg-white focus:bg-blue-200 focus:text-blue-800 hover:ring-1 hover:ring-yellow-500 focus:ring-4 focus:ring-yellow-500',
  default:
    'p-2 bg-gray-100 dark:bg-gray-900 bg-opacity-50 text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-black hover:text-gray-500 dark:hover:text-gray-500 focus:bg-white dark:focus:bg-black focus:text-gray-700 dark:focus:text-gray-300 hover:ring-1 hover:ring-yellow-500 focus:ring-4 focus:ring-yellow-500',
}

function Button({
  as = 'button',
  to,
  children,
  className,
  type,
  theme = 'default',
  width = '',
  height = 'h-8',
  rounded = 'rounded',
  onClick,
}) {
  const classes = clsx(
    'inline-flex justify-center items-center font-extrabold text-xl leading-none transition-all hover:ring-opacity-80',
    THEMES[theme],
    width,
    height,
    rounded,
    className
  )
  let As
  switch (as) {
    case 'a':
      As = Link
      break
    case 'nav':
      As = NavLink
      break
    default:
      As = 'button'
  }
  const props = { type, to, className: classes, onClick }
  return <As {...props}>{children}</As>
}

export default Button
