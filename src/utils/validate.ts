const PHONE_NUMBER_REGEXP = /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/

export const isPositiveInteger = (value?: number) => {
  if (!value) {
    return false
  }

  return value > 0
}

export const isValidPhoneNumber = (value: string, require = false) => {
  if (!value && !require) return true

  return !!value.match(PHONE_NUMBER_REGEXP)
}
