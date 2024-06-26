import React, { useState } from 'react'
import './left-content.scss'
import avatar from '@/assets/img/avatar.png'
const sessionsData = [
    {
        id: 1,
        username: '登录助手',
        tags: ['助'],
        isOnline: true,
        contentType: '登录消息',
        content: 'abababa',
        time: '6分钟前',
        count: 1
    }, {
        id: 2,
        username: '123232',
        tags: [],
        isOnline: false,
        contentType: '语音消息',
        content: 'ewfwefwf',
        time: '28分钟前',
        count: 2
    },
    {
        id: 3,
        username: '张三',
        tags: [],
        isOnline: true,
        contentType: '文件消息',
        content: 'ewfwefwf',
        time: '28分钟前',
        count: 2
    },
];

export default function LeftContent() {
    return (
        <div className="left-content d-flex">
            <div className="message-left-search d-flex">
                <Search />
            </div>
            <div className="message-left-top-group d-grid">
                <TopGroup />
            </div>
            <div style={
                {
                    textAlign: 'start',
                }
            }>
                会话记录({sessionsData.length})
            </div>

            <div className="message-left-sessions">
                <Sessions />
            </div>
        </div>

    )
}

function Search() {
    const [isFocus, setIsFocus] = useState(false);
    const [inputValue, setInputValue] = useState('');
    function handleFocus() {
        setIsFocus(true)
    }
    function handleBlur() {
        setIsFocus(false)
    }
    function handleInput(e) {
        setInputValue(e.target.value)
    }
    function handleCancel() {
        setInputValue('')
    }
    return (
        <>
            <div className={`search d-flex ${isFocus ? "active" : ""}`}>
                <span className='iconfont icon-search icon'></span>
                <input type="text" placeholder='输入搜索的内容' onFocus={handleFocus} onBlur={handleBlur} onInput={handleInput} value={inputValue} />
                <div className='cancel-container d-flex'>
                    <span className={`cancel cursor-pointer ${inputValue === '' ? 'd-none' : ''}`} onClick={handleCancel}>x</span>
                </div>
            </div>
            <div className="add cursor-pointer d-flex">
                <span className='icon iconfont icon-jiahao'></span>
            </div>
        </>
    )
}

function TopGroup() {
    const data = [];
    for (let i = 0; i < 10; i++) {
        data.push(
            (
                <div key={`top-group-${i}`} className='text-align-center cursor-pointer group-item'>
                    <img src={avatar} alt="" />
                    <span className='text'>top-group-{i}</span>
                </div>
            )
        )
    }
    return (
        <>
            {data}
        </>
    )
}
function Sessions() {
    return (
        <>
            {
                sessionsData.map(item => (
                    <div key={item.id} className='d-flex message-item cursor-pointer'>
                        <img src={avatar} alt="" />
                        <div className='d-flex main'>
                            <div className='title d-flex'>
                                <div className="username">

                                {item.username}
                                </div>
                                {item.tags.map(item=>(
                                   <span className='tag-item' key={item}>
                                    {item}
                                   </span> 
                                ))}
                            </div>
                            <div className="content">
                                <span style={
                                    {
                                        color:item.isOnline?'green':''
                                    }
                                }>{item.isOnline?'[在线]':''}
                                </span>
                                <span>[{item.contentType}]</span>
                            </div>
                        </div>
                        <div className="footer">
                            {item.time}
                        </div>
                    </div>
                ))
            }
        </>
    )
}
