export namespace DemoTsModule {
  type extend = <T, U>(to: T, from: U) => T & U
  type shuffle = <T>(array: T[]) => T[]
}

export interface DemoTsLibType {
  extend: DemoTsModule.extend
  shuffle: DemoTsModule.shuffle
}

declare const DemoTsLib: DemoTsLibType;

export default DemoTsLib


