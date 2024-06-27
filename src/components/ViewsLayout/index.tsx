import React, { ReactElement, useEffect, useRef, useState } from 'react'
import './index.scss'
type Props = {
  leftContent?: ReactElement,
  rightContent?: ReactElement,
  leftStyle: React.CSSProperties,
  rightStyle?: React.CSSProperties,
  isFold?:boolean,
}
function toNumber(properties){

return parseFloat(typeof(properties)==='string'?properties.replace('px',''):properties)
}
export default function ViewsLayout({ leftContent, rightContent, leftStyle, rightStyle,isFold }: Props) {
  const [leftWidth, setLeftWidth] = useState(0)
  const [mouseDown, setMouseDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const leftRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (leftRef) {
      const leftEl = leftRef.current;
      setLeftWidth(leftEl.offsetWidth)
    }
  }, [])
  function handleMouseUp() {
    setMouseDown(false)
  }
  function handleMouseMove(e) {
    if (e.clientX === 0 || !mouseDown) return; // Prevent updates when drag ends
    const diffX = e.clientX - startX
    setLeftWidth(leftWidth + diffX)
    setStartX(e.clientX)
  }
  function hanleMouseDown(e) {
    setStartX(e.clientX)
    setMouseDown(true)
    e.preventDefault()
  }
  function handleMouseLeave() {
    setMouseDown(false)
  }
  useEffect(() => {
    if (leftWidth !== 0) {
      leftRef.current.style.width = leftWidth + 'px'
    }
  }, [leftWidth])
  return (
    <div className='views-layout d-flex' onMouseLeave={handleMouseLeave} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
      <div className={`views-left ${isFold?'d-none':''}`} ref={leftRef} style={leftStyle}>
        {leftContent}
      </div>
      <div className="views-right d-flex">
        <div className={`views-line cursor-col-resize ${isFold?'d-none':''}`} onMouseDown={hanleMouseDown}></div>
        <div className="right-content" style={rightStyle}>
          {rightContent}
        </div>
      </div>
    </div>
  )
}
