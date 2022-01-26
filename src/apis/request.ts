import Taro from '@tarojs/taro'
import { HTTP_STATUS } from '@/constants/http'
import { error } from './interceptors'

Taro.addInterceptor(error())

export const fetch = ({ url, ...options }: Taro.request.Option): Promise<any> =>
  new Promise((resolve, reject) => {
    Taro.request({
      ...options,
      url,
      success: ({ statusCode, data = {} }) => {
        if (statusCode >= HTTP_STATUS.BAD_REQUEST) {
          return reject({
            ...data,
            status: statusCode,
          })
        }
      },
    })
      .then((res) => resolve(res))
      .catch((err) => {
        reject(err)
      })
  })
