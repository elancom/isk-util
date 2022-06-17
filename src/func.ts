export function func(...fs: any) {
  return async function () {
    if (fs == null || fs.length === 0) {
      return
    }
    await Promise.all(fs.map((it: any) => it()))
  }
}
