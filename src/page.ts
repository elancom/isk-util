export interface Page {
  current?: number
  pageSize?: number
}

export function newPage(): Page {
  return {current: 1, pageSize: 10}
}
