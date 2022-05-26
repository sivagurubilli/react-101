import React from 'react'

const Company = ({comp,setcomp}) => {

 
 setcomp('Amazon')

  return (
    <div  style={{margin:"50px 30px"}}>{comp} </div>
  )
}

export default Company