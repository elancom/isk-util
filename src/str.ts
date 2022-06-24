export function isBlank(str: any) {
  if (!str) {
    return true
  }
  return trim(str).length <= 0
}

export function trim(str: string) {
  return str ? str.trim() : str
}
