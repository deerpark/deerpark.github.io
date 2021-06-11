import { useState } from 'react'

/**
 *
 * @param {string} key 로컬스토리지 키
 * @param {any} initialValue 로컬스토리지 값
 * @returns [getter, setter]
 */
export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
      }
    } catch (error) {
      /* console.log(error) */
      return initialValue
    }
  })

  const setValue = value => {
    try {
      if (typeof window !== 'undefined') {
        const valueToStore = value instanceof Function ? value(storedValue) : value
        setStoredValue(valueToStore)
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      /* console.log(error) */
    }
  }

  return [storedValue, setValue]
}
