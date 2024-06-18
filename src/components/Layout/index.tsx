import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Message from '@/views/Message'
import Directory from '@/views/Directory'
import Note from '@/views/Note'
import Setting from '@/views/Setting'
import './index.scss'
import avatar from '@/assets/img/avatar.png'
export default function Layout() {
    const navData = [
        {
            id: 1,
            name: '消息',
            path: '/message',
            component: Message
        },
        {
            id: 2,
            name: '通讯录',
            path: '/directory',
            component: Directory
        },
        {
            id: 3,
            name: '笔记',
            path: '/note',
            component: Note
        },
        {
            id: 4,
            name: '设置',
            path: '/setting',
            component: Setting
        }
    ]
    const Links = navData.map(item => (
        <div key={item.id}>
            <Link to={item.path}>{item.name}</Link>
        </div>
    ))
    const Routes = navData.map(item => (
        <Route path={item.path} component={item.component} key={item.id} />
    ))
    return (
        <>
            <Router>
                <div className="flex">
                    <div className="bg-skyblue" style={
                        {
                            width:'30%'
                        }
                    }>
                    <img src={avatar} alt="" />
                        {Links}
                    </div>
                    <div className="bg-pink" style={
                        {
                            width:'70%'
                        }
                    }>
                        {Routes}
                    </div>
                </div>
            </Router>
        </>
    )
}
