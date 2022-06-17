const numbers = "0123456789";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const strings = numbers + letters
const codes = numbers + letters + "~!@#$%^*()_+-=[]{}|;:,./<>?"

export function randomInt(min: number, max: number) {
  return min + Math.floor(Math.random() * (max - min))
}

export function randomNumbers(count: number) {
  return randomSpec(count, numbers)
}

export function randomLetters(count: number) {
  return randomSpec(count, letters)
}

export function randomString(count: number) {
  return randomSpec(count, strings)
}

export function randomCodes(count: number) {
  return randomSpec(count, codes)
}

export function randomSpec(count: number, spec: string) {
  let ss = []
  for (let i = 0; i < count; i++) {
    ss.push(spec.charAt(randomInt(0, spec.length)))
  }
  return ss.join("")
}
