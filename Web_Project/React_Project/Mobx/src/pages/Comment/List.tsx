// observer是一个高阶组件函数，需要包裹一个组件，实现响应式更新
import { observer } from 'mobx-react'
import { useStore } from '../../store'

export default observer(function List() {
  const { commentStore } = useStore()
  return (
    <div className="comment-list">
      {commentStore.list.map((item) => (
        <div className="list-item" key={item.id}>
          <div className="user-face">
            <img className="user-head" src={item.avatar} alt="" />
          </div>
          <div className="comment">
            <div className="user">{item.author}</div>
            <p className="text">{item.comment}</p>
            <div className="info">
              <span className="time">{item.time}</span>
              {/* 如果atitute是1则点赞，-1则点踩，0什么也不点 */}
              <span className={`like ${item.attitute === 1 ? 'liked' : ''}`} onClick={() => commentStore.changeAttitute(item.id, item.attitute === 1 ? 0 : 1)}>
                <i className="icon" />
              </span>
              <span className={`hate ${item.attitute === -1 ? 'hated' : ''}`} onClick={() => commentStore.changeAttitute(item.id, item.attitute === -1 ? 0 : -1)}>
                <i className="icon" />
              </span>
              <span className="reply btn-hover" onClick={() => commentStore.del(item.id)}>
                删除
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
})
