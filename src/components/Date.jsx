import React from 'react'

const date = ({date,setdate}) => {

    date="25/5/2021"
  setdate(date)

  return (
    <div style={{margin:"50px 30px"}}>{date}</div>
  )
}

export default date