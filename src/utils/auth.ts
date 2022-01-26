import { loginWechat } from '@/apis/auth'

export const handleLogin = async () => {
  // const res = await Taro.login()
  // const code = res.code
  const code = '111'
  const loginInfo = await loginWechat(code)
  console.log('查看返回的信息', loginInfo)
  // setTokenSync(loginInfo.jwt)
}
