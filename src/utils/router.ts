import { getCurrentPages } from '@tarojs/taro'

interface RouterResult {
  route: string
  options: any
  data: any
  paramRoute: string
  url: string
}

const RouteDataParams = {}

export const routeData = {
  set: (url: string, data?: Object) => {
    RouteDataParams[url] = data
  },
  get: (url: string) => RouteDataParams[url] || {},
}

export const routeFormat = (route: string) => (route.startsWith('/') ? route : `/${route}`)

export const generateParamRoute = (route, options = {}) => {
  let paramsStr = ''
  if (options) {
    paramsStr = Object.keys(options)
      .map((key) => `${key}=${options[key]}`)
      .join('&')
  }

  return `${routeFormat(route)}${paramsStr && `?${paramsStr}`}`
}

export const getRouteByDelta = (delta: number): RouterResult => {
  const pages = getCurrentPages()
  const lastIndex = pages.length - 1
  const { route = '', options = {} } = pages[lastIndex - delta]
  const _route = routeFormat(route)
  const url = generateParamRoute(route, options)
  const data = routeData.get(_route)
  return { route: _route, options, data, paramRoute: url, url }
}
