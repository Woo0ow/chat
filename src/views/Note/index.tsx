import React from 'react'
import ViewsLayout from '@/components/ViewsLayout'

export default function Note() {
  return (
    <ViewsLayout leftContainer={
      <div>hola</div>
    } rightContainer={
      <div>world</div>
    } leftProps={{
      style: {
        width: '20%',
        height: '100%'
      },
      className: 'd-flex'
    }} rightProps={{
      style: {
        width: '80%',
      },
      className: ''
    }} isRouter={false} />

  )
}
