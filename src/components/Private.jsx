

import {Navigate} from "react-router-dom"
import { useSelector } from "react-redux/es/exports"
export const Private =({children}) =>{
    const status = useSelector(store=>store.aauth.isLoggedin)
    if(status === false && children.type.name === "Login") {
        return children
    }

      if(status === false) {
        return <Navigate to ={"/login"} />

      }

      if(status === true && children.type.name === 'Login'){
        return <Navigate to ={'/'} />
      }

      return children


}