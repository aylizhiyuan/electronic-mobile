import Taro from '@tarojs/taro'
import { EventAction, eventCenter } from '@/utils/eventCenter'

export const StorageSyncKeys = {
  TOKEN: 'token',
  SEARCH_HISTORY: 'searchHistory',
}

export const setStorageSync = (key: string, value: any) => {
  Taro.setStorageSync(key, value)
}

export const setTokenSync = (value: any) => {
  setStorageSync(StorageSyncKeys.TOKEN, value)
  eventCenter.trigger(EventAction.SET_TOKEN)
}

export const getStorageSync = (key: string, defaultValue?: any) => {
  const value = Taro.getStorageSync(key)

  if (!value && defaultValue) {
    return defaultValue
  }
  return value
}

export const removeStorageSync = (key: string) => {
  Taro.removeStorageSync(key)
}
