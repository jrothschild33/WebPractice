// observer是一个高阶组件函数，需要包裹一个组件，实现响应式更新
import { observer } from 'mobx-react'
import { useState } from 'react'
import { useStore } from '../../store'

export default observer(function Form() {
  const [value, setValue] = useState('')
  const { commentStore } = useStore()
  const add = () => {
    commentStore.add(value)
    setValue('')
  }
  return (
    <div className="commment-send">
      <div className="user-face">
        <img className="user-head" src="https://c-ssl.dtstatic.com/uploads/item/201901/13/20190113221500_jPjPv.thumb.1000_0.jpeg" alt="" />
      </div>
      <div className="textarea-container">
        <textarea cols={80} rows={5} placeholder="发条友善的评论" className="ipt-txt" value={value} onChange={(e) => setValue(e.target.value)} />
        <button className="comment-submit" onClick={add}>
          发表评论
        </button>
      </div>
    </div>
  )
})
