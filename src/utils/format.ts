import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

export const formatDate = (timeUnix: number | undefined | null, formatter: string = 'YYYY.MM.DD') => {
  if (!timeUnix) return ''
  return dayjs.unix(timeUnix).format(formatter)
}

export const getDateObjectInfo = (timeUnix: number) => {
  const date = dayjs.unix(timeUnix)
  const year = date.format('YYYY')
  const month = date.format('MM')
  const day = date.format('DD')
  const hour = date.format('HH')
  const minute = date.format('mm')
  const second = date.format('ss')

  return { year, month, day, hour, minute, second }
}

export const getDateUnix = (timeStr: string) => dayjs(timeStr).unix()

export const formatPoint = (value?: number) => {
  if (!value) {
    return '0'
  }

  if (value > 999999) {
    return '999,999+'
  }

  return value.toLocaleString('en-US')
}

export const formatDistance = (distance: number | null) =>
  distance != null ? (distance < 1000 ? `${distance} M` : `${(distance / 1000).toFixed(1)} KM`) : '距离未知'

export const textFormat = (text?: string) => {
  if (!text) {
    return ''
  }

  return text.replace(/\\n/g, '\n')
}

export const formatCampaignProps = (campaign) => {
  for (const key in campaign) {
    if (key.match(/lon|lat|distance/)) {
      campaign[key] = Number(campaign[key])
    }
  }
  return campaign
}
