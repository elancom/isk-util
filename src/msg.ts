type Created<T> = { code?: number, msg?: string, data?: T };

export default class Msg<T> {
  code: number = 200
  msg: string = ''
  data: T = null as any

  isOk() {
    return this.code === 200
  }

  isErr() {
    return !this.isOk()
  }

  static ok<T>({code = 200, msg = '', data = null as any}: Created<T> = {}): Msg<T> {
    let m = new Msg<T>();
    m.code = code
    m.msg = msg
    m.data = data
    return m
  }

  static err<T>({code = 400, msg = '', data = null as any}: Created<T> = {}): Msg<T> {
    let m = new Msg<T>();
    m.code = code
    m.msg = msg
    m.data = data
    return m
  }

  static make<T>({code = 200, msg = '', data = null as any}: Created<T>): Msg<T> {
    let m = new Msg<T>();
    m.code = code
    m.msg = msg
    m.data = data
    return m
  }
}
