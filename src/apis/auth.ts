import { fetch } from '@/apis/request'

const baseUrl = process.env.SERVICE_BASE_URL

export const loginWechat = (code: string) =>
  fetch({
    url: `${baseUrl}/wechatLogin`,
    method: 'GET',
    data: { code },
  })
