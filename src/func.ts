export interface OkHandler {
  onOk: () => void
}

export function func(...fs: any) {
  return async function () {
    if (fs == null || fs.length === 0) {
      return
    }
    await Promise.all(fs.map((it: any) => it()))
  }
}

export function call(fs: any, ...args:any) {
    fs.call(null, args)
}
