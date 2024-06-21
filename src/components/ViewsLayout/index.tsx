import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import './index.scss'
type Props = {
    leftContainer: {
        links?: any
    } | any,
    rightContainer: {
        routes?: any
    } | any,
    leftProps?: object,
    rightProps?: object,
    isRouter?: boolean
}

export default function ViewsLayout({ leftContainer, rightContainer, leftProps = null, rightProps = null, isRouter = false }: Props) {
    if (isRouter) {
        if (leftContainer.links && rightContainer.routes)
            return (
                <>
                    <HashRouter>
                        <div className="d-flex container">
                            <div {...leftProps} className='aside-shadow'>
                                {leftContainer.links}
                            </div>
                            <div {...rightProps}>
                                {rightContainer.routes}
                            </div>
                        </div>
                    </HashRouter>
                </>
            )
        else
            throw new Error("if you use router then you have to pass leftContainer.links and rightContainer.routes into ViewsLayout component");
    }
    if (!React.isValidElement(leftContainer)||!React.isValidElement(rightContainer)){
console.log(typeof leftContainer)
        throw new Error("if you don't use router then you should pass jsx into leftContainer and rightContainer")
    }
    return (
        <>
            <div className="d-flex container">
                <div {...leftProps} className='aside-shadow'>
                    {leftContainer}
                </div>
                <div {...rightProps}>
                    {rightContainer}
                </div>
            </div>
        </>
    )
}
