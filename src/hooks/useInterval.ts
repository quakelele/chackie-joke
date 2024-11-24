import { useState, useEffect } from 'react'

export const useInterval = (initialValue: boolean, fetchData: () => void) => {
  const [value, setValue] = useState<boolean>(initialValue)
  const [intervalID, setIntervalID] = useState<number>()
  const toggle = () => {
    setValue(!value)
  }

  useEffect(() => {
    if (value) {
      const ID = setInterval(() => {
        fetchData()
      }, 3000)
      setIntervalID(ID)
      console.log('started interval')
      return
    }
    clearInterval(intervalID)
    console.log('stoppped interval')
  }, [value])

  return [value, toggle]
}
