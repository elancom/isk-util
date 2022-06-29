export interface Event {
  name: string
  data?: any
}

interface Subscribe {
  /**
   * sub event
   * @param name event name
   */
  sub: (name: string) => Sub
}

interface Fire {
  /**
   * dispatch event
   * @param event event obj
   */
  fire: (event: Event) => void
}

interface Emitter extends Subscribe, Fire {
}

export type Listener = (event: Event) => void;

type Cancel = (sub: Sub) => void
type Listen = (sub: Sub) => void

export interface Sub {

  readonly event: string

  listen(listener: Listener): void

  cancel(): void
}

let subIndex = 0

class SubImpl implements Sub, Fire {
  id = 0
  event = ''
  listen0: Listen
  cancel0: Cancel
  listeners: Listener[] = []
  wasCancel = false

  constructor(event: string, listen: Listen, cancel: Cancel) {
    this.id = ++subIndex
    this.event = event
    this.listen0 = listen
    this.cancel0 = cancel;
    console.log('new sub', this.event)
  }

  cancel(): void {
    console.log('cancel', this.event, this.listeners)
    this.listeners = []
    this.cancel0(this)
    this.wasCancel = true
  }

  listen(listener: Listener): void {
    if (this.wasCancel) {
      return;
    }

    const find = this.listeners.find(it => it === listener);
    if (find) {
      return
    }

    this.listen0(this)
    this.listeners.push(listener);
    console.log('listen', this.event, this.listeners.length)
  }

  fire(event: Event): void {
    if (event.name !== this.event) {
      return
    }
    for (let listener of this.listeners) {
      listener.call(null, event)
    }
  }
}

class EventManager implements Emitter {
  events = new Map<string, Sub[]>();

  sub(name: string) {
    return new SubImpl(name,
      (sub: Sub) => this.listen(sub),
      (sub: Sub) => this.cancel(sub),
    );
  }

  fire(event: Event): void {
    const subs = this.events.get(event.name);
    if (!subs || subs.length === 0) {
      return
    }
    for (let sub of subs) {
      let s = sub as any as Fire
      s.fire(event)
    }
  }

  private listen(sub: Sub) {
    const [, index] = this.findSubIndex(sub);
    if (index !== -1) {
      return
    }
    let subs = this.events.get(sub.event);
    if (!subs) {
      subs = []
      this.events.set(sub.event, subs)
    }
    subs.push(sub)
  }

  private cancel(sub: Sub) {
    const [subs, index] = this.findSubIndex(sub);
    if (index !== -1) {
      return
    }
    subs.splice(index, 1);
  }

  private findSubIndex(sub: Sub): [Sub[], number] {
    const subs = this.events.get((sub as SubImpl).event)
    if (!subs || subs.length === 0) {
      return [[], -1]
    }
    return [subs, subs.findIndex(it => it === sub)]
  }
}

export function newEmitter(): Emitter {
  return new EventManager()
}

export function newEvent(name: string, data: any): Event {
  return {name: name, data: data}
}

const global = newEmitter()

export function getEmitter() {
  return global
}
