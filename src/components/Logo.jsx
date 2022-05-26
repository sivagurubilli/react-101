import React from 'react'

const logo = ({src,setsrc}) => {


    var src ="https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg"


    setsrc(src)
  return (
    <div>
        <img style={{height:"100px", marginLeft:"500px" , marginTop :"-100px"}}src ={src}></img>
    </div>
  )
}

export default logo