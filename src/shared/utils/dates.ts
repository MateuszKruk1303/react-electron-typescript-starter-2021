import { differenceInSeconds } from 'date-fns'

const MINUTE_SECONDS = 60
const HOUR_SECONDS = 60 * MINUTE_SECONDS
const DAY_SECONDS = 24 * HOUR_SECONDS

export const getDiff = (
  firstDate: Date | number,
  secondDate: Date | number
) => {
  const diffInSeconds = differenceInSeconds(firstDate, secondDate)

  const days = Math.floor(diffInSeconds / DAY_SECONDS)
  const hours = Math.floor((diffInSeconds - days * DAY_SECONDS) / HOUR_SECONDS)
  const minutes = Math.floor(
    (diffInSeconds - days * DAY_SECONDS - hours * HOUR_SECONDS) / MINUTE_SECONDS
  )
  const seconds =
    diffInSeconds -
    days * DAY_SECONDS -
    hours * HOUR_SECONDS -
    minutes * MINUTE_SECONDS

  return {
    days,
    hours,
    minutes,
    seconds,
  }
}
