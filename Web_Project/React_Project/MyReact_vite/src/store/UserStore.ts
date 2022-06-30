import { observable, makeObservable, action } from 'mobx'

export default class UserStore {
  @observable public username: string = ''

  constructor(username: string = '') {
    this.username = username
    makeObservable(this)
  }

  @action public changeName = (name: string) => {
    this.username = name
  }
}
