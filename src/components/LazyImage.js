import React, { Suspense } from 'react'

function LazyImage(props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <img src={props.img} className={props.class}/>
    </Suspense>
  )
}

export default LazyImage