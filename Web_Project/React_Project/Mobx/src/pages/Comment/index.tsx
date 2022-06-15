import Form from './Form'
import List from './List'
// observer是一个高阶组件函数，需要包裹一个组件，实现响应式更新
import { observer } from 'mobx-react'
import { useStore } from '../../store'
import { useEffect } from 'react'

export default observer(function Comment() {
  const { commentStore } = useStore()
  // 发送请求
  useEffect(() => {
    commentStore.getList()
  }, [commentStore])
  return (
    <div className="comment-container">
      {/* 评论数 */}
      <div className="comment-head">
        <span>{commentStore.list.length}评论</span>
      </div>
      {/* 添加评论 */}
      <Form></Form>
      {/* 评论列表 */}
      <List></List>
    </div>
  )
})
