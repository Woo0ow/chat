import React, { useState } from 'react'
import './right-content.scss'
export default function RightContent({ sessionType, userName, onToggle }) {
    const [isFold, setIsFold] = useState(false)
    function handleClick() {
        setIsFold(!isFold)
        onToggle(!isFold)
    }
    return (
        <>
            <div className="message-right-header d-flex">
                <div className={`icon iconfont ${isFold ? 'icon-menuUnfold' : 'icon-menuFold'} cursor-pointer`} onClick={handleClick}></div>
                <div className="title">
                    <div className='session-type'>{sessionType}</div>
                    <div className='username'>{userName}</div>
                </div>
                <div className="right d-flex">
                    <div className="notice iconfont icon-fagonggao"></div>
                    <div className="info iconfont icon-qunxinxi"></div>
                </div>
            </div>
            <div className="message-right-main">
                <div className="no-more">没有更多消息了</div>
                <Messages />
            </div>
            <div className="message-right-footer"></div>
        </>
    )
}
function Messages() {
    const data=[
        {
            id:1,
            datetime:'04/13 19:37',
            content:'1'
        },
        {
            id:2,
            datetime:'04/15 22:12',
            content:'asdf'
        },
        {
            id:3,
            datetime:'06/24 14:38',
            content:'11111111',
            reply:{
                datetime:'06/24 15:28',
                content:'22222'
            }
        }
    ];
    return (
        <>
        {
            data.map(item=>(
                <div className='message-item' key={`message-item-${item.id}`}></div>
            ))
        }
        </>
    )
}