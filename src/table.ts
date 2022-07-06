export interface Table<T> {
  list: T[],      // 列表
  total: number,  // 总页数
  loading: false, // 加载中
}

export function makeTable<T>(): Table<T> {
  return {
    list: [],
    total: 0,
    loading: false,
  }
}
