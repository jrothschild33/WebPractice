import { makeObservable } from 'mobx'
import { action, computed, observable, runInAction } from 'mobx'
import axios from 'axios'
import { CommentType } from '../types/data'

const request = axios.create({
  baseURL: 'http://localhost:8888',
  timeout: 5000,
})

export class Comment {
  constructor() {
    makeObservable(this)
  }
  // 评论列表
  @observable public list = [] as CommentType[]

  // 这里用了异步，需要使用runInAction修改观测值
  async getList() {
    // 需要添加泛型，在types/data.d.ts中定义，否则无法取到res.data
    const res = await request.get<CommentType[]>('/list')
    runInAction(() => {
      this.list = res.data
    })
  }

  // 添加评论
  async add(content: string) {
    const newObj = {
      attitute: 0,
      author: '默认用户',
      avatar: 'http://www.itcast.cn/2020gw/images/indeximg/logobot2.jpg',
      comment: content,
      time: new Date().toLocaleDateString(),
    }
    const res = await request.post<CommentType>('/list', newObj)
    runInAction(() => {
      this.list.push(res.data)
    })
  }

  // 删除评论
  async del(id: number) {
    await request.delete(`/list/${id}`)
    runInAction(() => {
      this.list = this.list.filter((item) => item.id !== id)
    })
  }

  // 点赞/踩
  async changeAttitute(id: number, attitute: number) {
    await request.patch(`/list/${id}`, {
      attitute,
    })
    const obj = this.list.find((itme) => itme.id === id)!
    runInAction(() => {
      obj.attitute = attitute
    })
  }
}
