import Taro from '@tarojs/taro'
import { Component } from 'react'
import { setStorageSync } from '@/utils/storageSync'
import { GLOBAL_OPTIONS_ON_LAUNCH } from '@/constants/common'
import { pages } from '@/app.config'
import { switchTab } from '@/utils/navigator'
import 'taro-ui/dist/style/index.scss'
import './app.scss'

class App extends Component {
  componentDidMount() {
    // 微信小程序静默登陆逻辑
  }

  onLaunch() {
    const option = Taro.getLaunchOptionsSync()
    if (option) {
      setStorageSync(GLOBAL_OPTIONS_ON_LAUNCH, option)
    }
  }

  onPageNotFound() {
    switchTab({ url: pages.home })
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  render() {
    return this.props.children
  }
}

export default App
