import { HTTP_STATUS } from '@/constants/http'
import { messager } from '@/components'

export const error = () => (chain) => {
  const requestParams = chain.requestParams
  return chain.proceed(requestParams).then((response) => {
    const { statusCode, data } = response
    const { errors } = data

    if (statusCode === HTTP_STATUS.INTERNAL_ERROR) {
      messager.info('internal server error')
    }
    if (statusCode >= HTTP_STATUS.BAD_REQUEST || (errors instanceof Array && errors.length > 0)) {
      console.error({
        ...data,
        requestParamsData: requestParams.data,
        status: statusCode,
      })
    }
    return response
  })
}
