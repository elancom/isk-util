import CryptoJS from "crypto-js"
import _md5 from "md5";

/**
 * 加密
 * @param data 字符串
 * @param key BASE64字符串
 * @returns {string} 已加密的BASE64字符串
 */
export function aesEncrypt(data: string, key: string) {
  let wordArray = CryptoJS.enc.Utf8.parse(key);
  let cipher = CryptoJS.AES.encrypt(data, wordArray, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return cipher.toString() // base64
}

/**
 * 解密
 * @param data BASE64字符串
 * @param key BASE64字符串
 * @returns {String} 已解密字符串
 */
export function aesDecrypt(data: string, key: any) {
  key = CryptoJS.enc.Utf8.parse(key);
  let decipher = CryptoJS.AES.decrypt(data, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return CryptoJS.enc.Utf8.stringify(decipher);
}

export function md5(data: string) {
  return _md5(data)
}

export function base64Encode(str: string): string {
  return encodeURIComponent(str)
}

export function base64Decode(str: string): string {
  return decodeURIComponent(str)
}
