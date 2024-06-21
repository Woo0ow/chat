import React from 'react'
import ViewsLayout from '@/components/ViewsLayout'
import './index.scss'
function LeftContainer() {
  return (
    <>
    <div className='d-flex align-items-center justify-content-space-around'>
      <div className="search-container d-flex align-items-center">
        <div className='iconfont icon-search'></div><input type="text" placeholder='搜索的内容' />
      </div>
      <div className="add bg-skyblue d-flex align-items-center justify-content-center iconfont icon-jiahao"></div>
    </div>

    </>
  )
}
export default function Message() {
  return (
    <div>
      <ViewsLayout leftContainer={
        <LeftContainer />
      } rightContainer={
        <div>world</div>
      } leftProps={{
        style: {
          height: '100%',
          width:'320px',
          minWidth:"320px"
        },
        className: 'd-flex'
      }} rightProps={{
        style: {
          width: '80%',
        },
        className: ''
      }} isRouter={false} />
    </div>
  )
}
