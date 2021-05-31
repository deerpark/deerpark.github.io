import classNames from 'classnames'

const THEMES = {
  transparent:
    'p-2 text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-300 focus:text-gray-900 dark:focus:text-gray-100 focus:shadow-inset hover:ring-2 hover:ring-yellow-500 focus:ring-4 focus:ring-yellow-500',
  menu: 'px-2 py-0 bg-blue-600 text-white hover:bg-blue-500 focus:bg-white focus:text-blue-700',
  'menu-active': 'px-2 py-0 bg-white text-blue-700',
  primary:
    'p-2 bg-blue-700 text-white hover:bg-blue-500 focus:bg-blue-800 focus:text-blue-200 hover:ring-2 hover:ring-yellow-500 focus:ring-4 focus:ring-yellow-500',
  active:
    'p-2 bg-white text-blue-700 hover:bg-white focus:bg-blue-200 focus:text-blue-800 hover:ring-2 hover:ring-yellow-500 focus:ring-4 focus:ring-yellow-500',
  default:
    'p-2 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-black hover:text-gray-700 dark:hover:text-gray-300 focus:bg-white dark:focus:bg-black focus:text-gray-900 dark:focus:text-gray-100 hover:ring-2 hover:ring-yellow-500 focus:ring-4 focus:ring-yellow-500',
}

function Button({
  children,
  className,
  type = 'button',
  theme = 'default',
  width = '',
  height = 'h-8',
  rounded = 'rounded',
}) {
  const classes = classNames(
    'inline-flex justify-center items-center font-extrabold text-xl leading-none transition-all hover:ring-opacity-80',
    THEMES[theme],
    width,
    height,
    rounded,
    className
  )
  return (
    <button type={type} className={classes}>
      {children}
    </button>
  )
}

export default Button
