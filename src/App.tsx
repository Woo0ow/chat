import React from 'react'
import { HashRouter } from 'react-router-dom'
import WebLayout from '@/components/WebLayout'
import './assets/css/iconfont.css'
export default function App() {
  return (
    <div>
      <HashRouter>
        <WebLayout />
      </HashRouter>
    </div>
  )
}
