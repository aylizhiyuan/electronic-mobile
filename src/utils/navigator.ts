import Taro from '@tarojs/taro'
import { routeData, getRouteByDelta } from './router'

export type NavigateType = Taro.navigateTo.Option & { query?: Object; data?: Object }
type NavigateBackType = Taro.navigateBack.Option & { data?: Object }

export const getPath = (str: string, query?: Object) => {
  let queryStr = ''

  if (query) {
    queryStr = Object.keys(query)
      .filter((key) => !!query[key])
      .map((key) => `${key}=${query[key]}`)
      .join('&')
    if (queryStr) {
      queryStr = `${str.indexOf('?') < 0 ? '?' : '&'}${queryStr}`
    }
  }
  const urlStr = str.startsWith('/') ? str : '/' + str
  return urlStr + queryStr
}

const navigator = (navigateMethod: Function, param: string | NavigateType) => {
  let parsedParam: any = {}
  let dataParam = {}
  if (typeof param === 'string') {
    parsedParam = {
      url: getPath(param),
    }
  } else {
    const navigateParam = param as NavigateType
    parsedParam = {
      ...navigateParam,
      url: getPath(navigateParam.url, navigateParam.query),
    }
    const navigateParamData = navigateParam.data || {}
    dataParam = { ...navigateParamData }
  }

  routeData.set(parsedParam.url, dataParam)
  navigateMethod(parsedParam)
}

export const navigateTo = (param: string | NavigateType) => navigator(Taro.navigateTo, param)
export const redirectTo = (param: string | NavigateType) => navigator(Taro.redirectTo, param)
export const reLaunch = (param: string | NavigateType) => navigator(Taro.reLaunch, param)
export const switchTab = (param: string | NavigateType) => navigator(Taro.switchTab, param)
export const navigateBack = (param: NavigateBackType = {}) => {
  // get backed url
  const delta = param.delta ? (param.delta += 1) : 1
  const { url } = getRouteByDelta(delta)
  routeData.set(url, param.data)

  return Taro.navigateBack(param)
}
