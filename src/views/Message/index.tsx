import React from 'react'
import ViewsLayout from '@/components/ViewsLayout'
import './index.scss'
function LeftContainer() {
  return (
    <>
      <div className='d-flex align-items-center justify-content-space-around'>
        {/* 搜索 */}
        <div className="search-container d-flex align-items-center">
          <div className='iconfont icon-search'></div><input type="text" placeholder='搜索的内容' />
        </div>
        {/* 创建群聊 */}
        <div className="add cursor-pointer d-flex align-items-center justify-content-center iconfont icon-jiahao"></div>
      </div>
      {/* 置顶群聊 */}
      <div className="top-groups d-flex">
          <div className="top-group">

          </div>
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
          width: 'calc(30% - 2px)',
          minWidth: '255px'
        },
        className: 'd-flex',
        maxwidth:500
      }} rightProps={{
        style: {
          width: '70%',
        },
        className: ''
      }} isRouter={false} colResize={true} />
    </div>
  )
}
