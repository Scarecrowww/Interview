import dayjs from 'dayjs'

export function formatDate(time, format) {
  if (!time) {
    return ''
  }
  return dayjs(time).date(format)
}
