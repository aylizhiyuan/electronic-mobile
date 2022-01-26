import { getApp } from '@tarojs/taro'
import { get } from '@/utils/lodash'

export const globalDataKeys = {
  products: {
    passionPointId: 'passionPointId',
  },
  stores: {
    updateCity: 'updateCity',
    updateIdMap: 'updateIdMap',
  },
  campaign: {
    refresh: 'refresh',
  },
}

export const setGlobalData = (key: string, value: any) => {
  getApp().globalData = {
    ...get(getApp(), `globalData`, {}),
    [key]: value,
  }
}

export const getGlobalData = (key: string): any => get(getApp(), `globalData.${key}`)

export const removeGlobalData = (key: string) => {
  getApp().globalData = {
    ...get(getApp(), `globalData`, {}),
    [key]: undefined,
  }
}
