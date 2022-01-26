import Taro from '@tarojs/taro'

const IOS_NAV_HEIGHT = 44
const ANDROID_NAV_HEIGHT = 48
export const BUTTON_WIDTH = 87
export const BUTTON_RIGHT_GAP = 6
export const BUTTON_TO_GAP = 4
export const BUTTON_HEIGHT = 32

export const systemInfo = () => {
  const { platform, statusBarHeight, windowWidth, screenHeight, safeArea } = Taro.getSystemInfoSync()
  const buttonWidth = BUTTON_WIDTH
  const buttonHeight = BUTTON_HEIGHT
  const buttonToRight = BUTTON_RIGHT_GAP
  let buttonToTop = 0
  try {
    const { top } = Taro.getMenuButtonBoundingClientRect()
    buttonToTop = top - statusBarHeight
  } catch (e) {
    buttonToTop = BUTTON_TO_GAP
  }

  const navHeight = platform.match(/ios/gi) ? IOS_NAV_HEIGHT : ANDROID_NAV_HEIGHT
  const safeBottomHeight = screenHeight - safeArea.bottom || 0
  return {
    platform,
    statusBarHeight,
    navHeight,
    buttonToTop,
    buttonWidth,
    buttonHeight,
    buttonToRight,
    windowWidth,
    safeBottomHeight,
  }
}
