import { Button, Result } from 'antd'
import React from 'react'

export default function Page404() {
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="对不起，您所访问的页面不存在"
        extra={<Button type="primary">回到主页</Button>}
      />
    </>
  )
}
