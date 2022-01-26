const rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
const reEscapeChar = /\\(\\)?/g

export const isArray = (value: any): boolean => Object.prototype.toString.call(value) === '[object Array]'

export const isString = (value: any): boolean => typeof value === 'string'

export const isNumber = (value: any): boolean => typeof value === 'number'

export const get = (source: Array<any> | object, path: string | Array<string>, defaultValue?: any): any => {
  let paths: Array<string> = []
  if (path instanceof Array) {
    paths = path
  }
  if (typeof path === 'string') {
    path.replace(rePropName, (substring: string, ...args: string[]): string => {
      const [number, quote, matchString] = args
      paths.push(quote ? matchString.replace(reEscapeChar, '$1') : number || substring)
      return matchString
    })
  }
  let result = source
  for (const p of paths) {
    result = Object(result)[p]
    if (result === undefined) {
      return defaultValue
    }
  }
  return result || defaultValue
}

export const size = (value: any): number => {
  if (isString(value) || isArray(value)) {
    return value.length
  }
  return 0
}

export const pick = (obj: any, keys: string[]) =>
  keys.reduce((prev, next) => Object.assign({}, prev, { [next]: obj[next] }), {})

export const flow = (funcs) => {
  const length = funcs.length
  let count = length
  while (count--) {
    if (typeof funcs[count] !== 'function') {
      throw new TypeError('Expected a function')
    }
  }
  return (...args) => {
    let index = 0
    let result = length ? funcs[index].apply(this, args) : args[0]
    while (++index < length) {
      result = funcs[index].call(this, result)
    }
    return result
  }
}
