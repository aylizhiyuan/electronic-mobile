import AES from 'crypto-js/aes'
import Base64 from 'crypto-js/enc-base64'
import Utf8 from 'crypto-js/enc-utf8'

export const AesKey = process.env.AES_KEY
export const EncryptPhoneKey = process.env.ENCRYPT_PHONE_KEY

export const encodeBase64 = (value) => Base64.stringify(Utf8.parse(value))

export const decodeBase64 = (value) => Utf8.stringify(Base64.parse(value))

export const encryptPhone = (value) => AES.encrypt(value, EncryptPhoneKey).toString()

export const encrypt = (value, key = decodeBase64(AesKey)) => AES.encrypt(value, key).toString()

export const decrypt = (value, key = decodeBase64(AesKey)) => AES.decrypt(value, key).toString(Utf8)

export function uuidv4() {
  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
