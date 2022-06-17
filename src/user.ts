export interface UserType {
  getName(): string
}

export default class User implements UserType {
  getName(): string {
    return "李四"
  }
}
