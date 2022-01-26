import { getSystemInfoSync, getMenuButtonBoundingClientRect } from '@tarojs/taro'

export const systemInfo = (() => {
  const IOS_NAV_HEIGHT = 56
  const ANDROID_NAV_HEIGHT = 60
  const {
    brand,
    model,
    screenWidth,
    screenHeight,
    windowHeight,
    windowWidth,
    statusBarHeight,
    system,
    version,
    SDKVersion,
    pixelRatio,
    benchmarkLevel,
    language,
  } = getSystemInfoSync()
  let menuButton = { left: 260 }
  if (getMenuButtonBoundingClientRect) {
    menuButton = getMenuButtonBoundingClientRect()
  }
  const isiOS = system.indexOf('iOS') > -1
  const navHeight = isiOS ? IOS_NAV_HEIGHT : ANDROID_NAV_HEIGHT
  const isiPad = model.indexOf('iPad') > -1

  return {
    brand,
    model,
    benchmarkLevel,
    statusBarHeight,
    navHeight,
    menuButton,
    version,
    SDKVersion,
    pixelRatio,
    screenWidth,
    screenHeight,
    windowHeight,
    windowWidth,
    isiPad,
    language,
  }
})()

export const compareVersion = (v1: string, v2: string) => {
  const arr1 = v1.split('.')
  const arr2 = v2.split('.')
  const len = Math.max(arr1.length, arr2.length)

  while (arr1.length < len) {
    arr1.push('0')
  }
  while (arr2.length < len) {
    arr2.push('0')
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(arr1[i])
    const num2 = parseInt(arr2[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }

  return 0
}

export const compareWechatVersion = (version: string) => compareVersion(systemInfo.version, version)

export const trimParams = (params?: object | string) => {
  if (!params) return params

  const newParams = {}
  Object.keys(params).forEach((key) => {
    const isEmpty = params[key] === '' || params[key] === undefined || params[key] === null
    if (!isEmpty) {
      newParams[key] = params[key]
    }
  })
  return newParams
}

export const debounce = <T extends (...params: any[]) => void>(func: T, delay: number) => {
  let timer: number
  return function (this: any, ...args: any[]) {
    clearTimeout(timer)
    timer = window.setTimeout(() => func.apply(this, args), delay)
  } as T
}

export const hasChinese = (name: string): boolean => /[\u4e00-\u9fa5]/.test(name)
