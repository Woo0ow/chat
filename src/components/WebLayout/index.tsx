import React, { useState } from 'react'
import { Route, Link, useLocation, Redirect, Switch } from 'react-router-dom'
import Message from '@/views/Message'
import Directory from '@/views/Directory'
import Note from '@/views/Note'
import Setting from '@/views/Setting'
import './index.scss'
import avatar from '@/assets/img/avatar.png'
// 防抖函数实现
let timeout;
function debounce(func, wait) {
    return function (...args) {
        clearTimeout(timeout);//清除前面的任务
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
function Avatar({ avatar }) {
    const [isShow, setIsShow] = useState(false);
    const handleMouseEnter = debounce(() => {
        setIsShow(true)
    }, 300);

    const handleMouseLeave = debounce(() => {
        setIsShow(false)
    }, 300);
    return (
        <>
            <img src={avatar}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className='avatar cursor-pointer'
                alt="Avatar" />
            <div onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`avatar-detail bg-yellowgreen ${isShow ? 'visible' : ''}`}>
                model
            </div>
        </>
    )
}
function Links({ data, location }) {
    const links = data.map(item => (
        <div className="links-item" key={item.path}>
            <Link to={item.path}>
                <div className={`iconfont ${item.icon} ${location.pathname === item.path ? 'active-color' : ''}`}></div>
                {item.name}
            </Link>
        </div>
    ))
    return (
        <>
            {links}
        </>
    )
}
function Routes({ data }) {
    const Routes = data.map(item => (
        <Route path={item.path} component={item.component} key={item.path} />
    ))
    return (
        <div className='routes-container'>
            <Switch>
                {Routes}
                <Redirect exact from="/" to="/message" />
            </Switch>
        </div>
    )
}
export default function WebLayout() {
    const [isOnline] = useState(true)
    const location = useLocation();
    const navData = [
        {
            name: '消息',
            path: '/message',
            icon: 'icon-a-066_xiaoxi',
            component: Message
        },
        {
            name: '通讯录',
            path: '/directory',
            icon: 'icon-a-066_wodehaoyou',
            component: Directory
        },
        {
            name: '笔记',
            path: '/note',
            icon: 'icon-a-066_tianxiedizhi-37',
            component: Note
        },
        {
            name: '设置',
            path: '/setting',
            icon: 'icon-a-066_shezhi',
            component: Setting
        }
    ]

    return (
        <>
            <div className="d-flex text-align-center container">
                <div className='links-container'>
                    <Avatar avatar={avatar} />
                    <span className={`${isOnline ? "color-green" : "color-red"} cursor-pointer is-online d-block`} >{isOnline ? "在线" : "离线"}</span>
                    <Links data={navData} location={location} />
                    <a href="https://github.com/Woo0ow" target='_blank' className='d-block'>
                        <img className='link-img' src="https://avatars.githubusercontent.com/u/166940161?v=4" alt="" />
                    </a>
                    <div className="logout cursor-pointer">
                        退出
                    </div>
                </div>
                <Routes data={navData} />
            </div>
        </>
    )
}
