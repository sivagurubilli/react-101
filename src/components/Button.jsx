import React from 'react'

const button = ({but,setbut}) => {

setbut(but)
  return (
    <div>

        <button style={{margin:"-50px 30px"}} >{but}</button>
    </div>
  )
}

export default button