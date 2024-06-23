import React, { ReactElement, useRef, useEffect, useState } from 'react'
import { HashRouter } from 'react-router-dom'
import './index.scss'
type Props = {
    leftContainer: {
        links?: any
    } | any,
    rightContainer: {
        routes?: any
    } | any,
    leftProps?: any,
    rightProps?: object,
    isRouter?: boolean,
    colResize?: boolean
}
function Layout({ leftContainer, rightContainer, leftProps = null,
    rightProps = null, isRouter = false, colResize = false }: Props): ReactElement {
    const [left, setLeft] = useState(0)
    const [dragStartX, setDragStartX] = useState(0)
    const leftContainerRef = useRef(null)
    useEffect(() => {
        if (leftContainerRef.current) {
            setLeft(leftContainerRef.current.offsetWidth);
        }
    }, []);
    const handleDragStart = function (e) {
        setDragStartX(e.clientX)
        

    }
    const handleDrag = function (e) {
        if (e.clientX === 0) return;
        const diffX = e.clientX - dragStartX;
        const miniLeft = parseInt(leftProps.style.minWidth.replace('px', ''))
        const maxLeft = leftProps.maxwidth;
        if (left + diffX > miniLeft && left + diffX < maxLeft) {

            setLeft(prevLeft => prevLeft + diffX)
            setDragStartX(e.clientX)
        }
        // else if (left + diffX > miniLeft && !(left + diffX < maxLeft)) {
        //     setLeft(maxLeft)
        //     setDragStartX(maxLeft)
        // }
        // else if (left + diffX < maxLeft && !(left + diffX > miniLeft)) {
        //     setLeft(miniLeft)
        //     setDragStartX(miniLeft)
        // }
        // console.log(left)
    }
    function handleDragEnd(e) {
        e.preventDefault() // Prevent the default drag end behavior
    }
    useEffect(() => {
        leftContainerRef.current.style.width = left + 'px'
    }, [left])
    return (
        <>
            {/* {isRouter ? <HashRouter> : null}
                <div {...leftProps} className='aside-shadow'>
                    {isRouter ? leftContainer.links : leftContainer}
                </div>
                {
                    colResize && (<div className="col-resize-line cursor-col-resize bg-yellowgreen" onDrag={handleDrag}></div>)
                }
                <div {...rightProps}>
                    {isRouter ? rightContainer.routes : rightContainer}
                </div>
                {isRouter ? </HashRouter> : null} */}

            <div className='layout-container d-flex position-relative' >
                {isRouter ? (
                    <HashRouter>
                        <div {...leftProps} className='aside-shadow' >
                            {leftContainer.links}
                        </div>
                        {colResize && (
                            <div className='col-resize-line cursor-col-resize' onDrag={handleDrag} onDragStart={handleDragStart}
                                onDragEnd={handleDragEnd} draggable style={
                                    {
                                        left: left + 'px'
                                    }
                                }></div>
                        )}
                        <div {...rightProps} >
                            {rightContainer.routes}
                        </div>
                    </HashRouter>

                ) : (
                    <>
                        <div {...leftProps} ref={leftContainerRef} className='aside-shadow' >
                            {leftContainer}
                        </div>
                        {colResize && (
                            <div className='col-resize-line cursor-col-resize'
                                onDrag={handleDrag} onDragStart={handleDragStart}
                                onDragEnd={handleDragEnd} style={
                                    {
                                        left: left + 'px'
                                    }
                                }></div>
                        )}
                        <div {...rightProps} >
                            {rightContainer}
                        </div>
                    </>
                )}
            </div>
        </>
    )
}
export default function ViewsLayout({ leftContainer, rightContainer, leftProps = null,
    rightProps = null, isRouter = false, colResize = false }: Props) {

    if (isRouter) {
        if (leftContainer.links && rightContainer.routes)
            return <Layout leftContainer={leftContainer}
                rightContainer={rightContainer} leftProps={leftProps} rightProps={rightProps} isRouter={isRouter} colResize={colResize} />
        else
            throw new Error("if you use router then you have to pass leftContainer.links and rightContainer.routes into ViewsLayout component");
    }
    if (!React.isValidElement(leftContainer) || !React.isValidElement(rightContainer)) {
        console.log(typeof leftContainer)
        throw new Error("if you don't use router then you should pass jsx into leftContainer and rightContainer")
    }
    return <Layout leftContainer={leftContainer}
        rightContainer={rightContainer} leftProps={leftProps} rightProps={rightProps} isRouter={isRouter} colResize={colResize} />
}
