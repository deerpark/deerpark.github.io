/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, forwardRef, useCallback, useRef } from 'react'

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
    const [translateX, setTranslateX] = useState(0)
    const indicator = useRef(null)
    const [width, setWidth] = useState('auto')
    const handleClickTab = useCallback(
      selectedValue => {
        if (onChange) {
          onChange(selectedValue.value)
        }
        selectedRef.current = selectedValue.value
      },
      [disabled, value]
    )
    const handleIdicator = useCallback(el => {
      if (el) {
        setTranslateX(el.offsetLeft)
        setWidth(el.clientWidth)
      }
    }, [])

    const handleClickOption = useCallback(
      option => e => {
        e.preventDefault()
        if (option.disabled) return
        const el = e.target
        if (el) {
          handleIdicator(el)
        }
        handleClickTab(option)
      },
      []
    )

    const init = useCallback(() => {
      const el = indicator?.current
      if (el) {
        console.log(selectedRef.current)
        handleIdicator(el.parentNode.childNodes[selectedRef.current])
      }
    }, [])

    useEffect(() => {
      init()
      window.addEventListener('resize', init)
      window.addEventListener('orientationchange', init)
    }, [])

    const renderTab = useCallback(
      option => {
        const isSelected = value === option.value
        return (
          <a
            key={option.value.toString()}
            onClick={handleClickOption(option)}
            className={`tab relative z-10 flex items-center max-w-max ${sizes[size].height} ${
              option.disabled ? 'opacity-50 cursor-default' : 'cursor-pointer'
            } px-2 rounded truncate font-bold transform ${
              isSelected ? '' : 'hover:scale-105'
            } transition-all duration-300 ease-in-out ${
              isSelected
                ? invert
                  ? 'text-blue-600 dark:text-blue-600'
                  : 'text-white dark:text-gray-800'
                : invert
                ? 'text-blue-100 dark:text-blue-100 hover:text-blue-600'
                : 'text-blue-900 dark:text-blue-400 text-opacity-40 hover:text-opacity-60'
            }`}>
            {option.label}
          </a>
        )
      },
      [value]
    )

    return (
      <div
        className={`tabs ${className} relative flex w-full ${inline ? 'sm:w-auto sm:inline-flex' : ''} ${
          align === 'center' ? 'justify-center' : 'justify-start'
        } items-stretch ${sizes[size].spaceX} ${sizes[size].fontSize} ${invert ? '' : 'bg-transparent'} ${
          sizes[size].rounded
        } ${sizes[size].padding}`}
        ref={ref}
        style={{ ...style }}>
        {items && items.map(renderTab)}
        <span
          ref={indicator}
          className={`tabs-indicator transition-all duration-300 ease-in-out absolute z-0 block ${sizes[size].top} ${
            sizes[size].left
          } ${sizes[size].height} ${sizes[size].rounded} ${invert ? 'bg-blue-100' : 'bg-blue-600'}`}
          style={{ width, transform: `translateX(${translateX}px)` }}
        />
      </div>
    )
  }
)

export default Tabs
