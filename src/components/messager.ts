import Taro, { showToast } from '@tarojs/taro'
import { TOAST_DURATION } from '@/constants/common'

const duration = 2000

// @ts-ignore
type Options = Omit<showToast.Option, 'title' | 'icon'>

const createDurationPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, duration)
  })

export default {
  error(title: string, options: Options = { duration: TOAST_DURATION }) {
    Taro.showToast({ ...options, title, icon: 'none' })
    return createDurationPromise()
  },
  success(title: string, options: Options = { duration: TOAST_DURATION }) {
    Taro.showToast({ ...options, title, icon: 'success' })
    return createDurationPromise()
  },
  info(title: string, options: Options = { duration: TOAST_DURATION }) {
    Taro.showToast({ ...options, title, icon: 'none' })
    return createDurationPromise()
  },
  showLoading(title: string, mask = false) {
    return Taro.showLoading({
      title,
      mask,
    })
  },
  hideLoading() {
    Taro.hideLoading()
  },
}
