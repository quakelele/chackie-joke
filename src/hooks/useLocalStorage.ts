import { useState, useEffect } from 'react'

export const useLocalStorage = (initialValue:string, key:string) => {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem(key) || initialValue))

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue]
}
