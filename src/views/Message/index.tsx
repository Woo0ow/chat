import React from 'react'
import ViewsLayout from '@/components/ViewsLayout'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
import './index.scss'

export default function Message() {

  return (
    <>
      <ViewsLayout leftStyle={
        {
          minWidth: 200,
          maxWidth: 500,
          width: 320
        }
      } leftContent={<LeftContent />}
        rightContent={<RightContent sessionType={'群聊'} userName={'建议/反馈(4)'} />}
      />
    </>
  )
}
