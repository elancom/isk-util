import {md5} from "@/crypto";

export function sign(data: Record<string, any>, key: string) {
  // let keys = Object.keys(data)

  // 去空
  for (let key in data) {
    const v = data[key];
    if (v) {
    }
  }
  // 排序
  // 秘钥
  // 摘要
  return signStr('', key)
}

export function signStr(data: string, key: string) {
  return md5(data + '&key=' + key).toLowerCase()
}
