import React from 'react'
import './right-content.scss'
export default function RightContent({ sessionType, userName }) {
    return (
        <>
            <div className="message-right-header d-flex">
                <div className="icon iconfont icon-menuFold cursor-pointer">
                </div>
                <div className="title">
                    <span>{sessionType}</span>
                    <span>{userName}</span>
                </div>
            </div>
        </>
    )
}
