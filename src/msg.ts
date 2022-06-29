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

  static ok<T>(data?: any): Msg<T> {
    let m = new Msg<T>();
    m.code = 200
    m.data = data
    return m
  }

  static err<T>(op: Created<T> | string | undefined): Msg<T> {
    let conf: Created<T> = {code: 400, msg: '', data: null as any}
    if (typeof op === "string") {
      conf.msg = op
    } else if (op) {
      conf = {...conf, ...op}
    }
    let m = new Msg<T>();
    m.code = conf.code ?? 400
    m.msg = conf.msg ?? ''
    m.data = conf.data as any
    return m
  }

  static make<T>({code = 200, msg = '', data = null as any}: Created<T>): Msg<T> {
    let m = new Msg<T>();
    m.code = code
    m.msg = msg
    m.data = data
    return m
  }

  static notFound() {
    return Msg.make({code: 404, msg: "not found"})
  }
}
