import { useRouter as Router, useDidShow, useDidHide } from '@tarojs/taro'
import { useState } from 'react'
import { generateParamRoute, routeData } from '@/utils/router'

export interface RouterResult {
  route: string
  options: any
  data: any
  paramRoute: string
  url: string
}

export const useRouter = (fresh = false): RouterResult => {
  const [isShow, setIsShow] = useState(false)

  useDidShow(() => fresh && !isShow && setIsShow(true))

  useDidHide(() => fresh && isShow && setIsShow(false))
  // 等同于getCurrentInstance().router
  // options 参数
  // route 当前跳转的地址
  const { params: options = {}, path: route } = Router()
  // 当前的跳转的地址 + 参数
  const url = generateParamRoute(route, options)
  const data = routeData.get(url)
  return { route, options, data, paramRoute: url, url }
}
