import React from 'react'
import { useState } from 'react'
import { Route, Link, useLocation, Redirect, Switch } from 'react-router-dom'
import Message from '@/views/Message'
import Directory from '@/views/Directory'
import Note from '@/views/Note'
import Setting from '@/views/Setting'
import './index.scss'
import avatar from '@/assets/img/avatar.png'
export default function WebLayout() {
    const [isOnline, setIsOnline] = useState(true)
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
    const Links = navData.map(item => (
        <div className="links-item" key={item.path}>
            <Link to={item.path}>
                <div className={`iconfont ${item.icon} ${location.pathname === item.path ? 'active-color' : ''}`}></div>
                {item.name}
            </Link>
        </div>
    ))
    const Routes = navData.map(item => (
        <Route path={item.path} component={item.component} key={item.path} />
    ))
    return (
        <>
            <div className="d-flex text-align-center">
                <div className='links-container'>
                    <img src={avatar} className='avatar' alt="" />
                    <div>
                        <span className={`${isOnline ? "color-green" : "color-red"} cursor-pointer is-online`} >{isOnline ? "在线" : "离线"}</span>
                    </div>
                    {Links}
                </div>
                <div className='routes-container'>
                    <Switch>
                        {Routes}
                        <Redirect exact from="/" to="/message" />
                    </Switch>
                </div>
            </div>
        </>
    )
}
