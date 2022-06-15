import { makeAutoObservable } from 'mobx'
export class Cart {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }
  list = [1, 2, 3]
}
