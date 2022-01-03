import { useState, useEffect } from 'react'
import { getDiff } from 'shared/utils/dates'

export const useCountDown = (deadline: Date | number) => {
  const [currentTime, setCurrentTime] = useState(new Date().getTime())
  const countdown = getDiff(deadline, currentTime)

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      setCurrentTime(now)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return countdown
}
