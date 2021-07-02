/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { forwardRef, useCallback, useRef } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'

const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
}
const sizes = {
  small: {
    spaceX: 'space-x-1',
    height: 'h-3.5',
    padding: 'p-0.5',
    rounded: 'rounded-sm',
    top: 'top-px',
    left: '-left-1',
    fontSize: 'text-xs',
  },
  default: {
    spaceX: 'space-x-2',
    height: 'h-7',
    padding: 'p-1',
    rounded: 'rounded',
    top: 'top-1',
    left: '-left-2',
    fontSize: 'text-base',
  },
  large: {
    spaceX: 'space-x-4',
    height: 'h-10',
    padding: 'p-2',
    rounded: 'rounded-lg',
    top: 'top-2',
    left: '-left-4',
    fontSize: 'text-lg',
  },
}

const Tabs = forwardRef(
  (
    {
      className = '',
      value,
      items,
      align = 'left',
      inline = true,
      disabled,
      onChange,
      invert = false,
      size = 'default',
      style = {},
    },
    ref
  ) => {
    const selectedRef = useRef(value)
    const handleClickTab = useCallback(
      selectedValue => {
        if (onChange) {
          onChange(selectedValue.value)
        }
        selectedRef.current = selectedValue.value
      },
      [disabled, value]
    )

    const handleClickOption = useCallback(
      option => e => {
        e.preventDefault()
        if (option.disabled) return
        handleClickTab(option)
      },
      []
    )

    const renderTab = useCallback(
      option => {
        const isSelected = value === option.value
        return (
          <a
            key={option.value.toString()}
            onClick={handleClickOption(option)}
            className={`tab relative z-10 flex items-center max-w-max ${sizes[size].height} ${
              option.disabled ? 'opacity-50 cursor-default' : 'cursor-pointer'
            } px-2 rounded whitespace-nowrap font-bold transform ${
              isSelected ? '' : 'hover:scale-105'
            } transition-all duration-300 ease-in-out ${
              isSelected
                ? invert
                  ? 'text-blue-600 dark:text-white'
                  : 'text-white dark:text-white'
                : invert
                ? 'text-gray-400 dark:text-gray-100 hover:text-blue-600'
                : 'text-blue-900 dark:text-blue-400 text-opacity-40 hover:text-opacity-60'
            }`}>
            <span className='flex relative z-10'>{option.label}</span>
            {isSelected && (
              <motion.span
                initial={false}
                transition={spring}
                layoutId='tabs-indicator'
                className={`tabs-indicator ${sizes[size].rounded} ${invert ? 'bg-blue-100' : 'bg-blue-600'}`}
              />
            )}
          </a>
        )
      },
      [value]
    )

    return (
      <AnimateSharedLayout>
        <div
          className={`tabs ${className} relative flex w-full ${inline ? 'sm:w-auto' : ''} ${
            align === 'center' ? 'justify-center' : 'justify-start'
          } items-stretch ${sizes[size].spaceX} ${sizes[size].fontSize} ${invert ? '' : 'bg-transparent'} ${
            sizes[size].rounded
          } ${sizes[size].padding}`}
          ref={ref}
          style={{ ...style }}>
          {items && items.map(renderTab)}
        </div>
      </AnimateSharedLayout>
    )
  }
)

export default Tabs
