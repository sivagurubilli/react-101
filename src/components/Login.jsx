


import {useState} from "react"
import { useDispatch } from "react-redux"
import {checkUserStatus} from "../Redux/auth/actions"
import {useNavigate} from "react-router-dom"

export const Login=()=>{
    const [formData,setformData] = useState({

    username:null,
    password : null
})
const [loginFailed,setLoginFailed] =  useState(null)

const handleChange =(e)=>{
    setformData({
        ...formData,
        [e.target.name] : e.target.value
    })
}

const dispatch = useDispatch()
const navigate = useNavigate()
const handleSubmit =(e)=>{
    e.preventDefault()
    setLoginFailed('Logging user in')
    fetch('https://reqres.in/api/login',{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json',
        },
        body:JSON.stringify(FormData),

    }).then(res =>res.json())
    .then(data =>{
        if(data.error) {
            setLoginFailed("Login unsuccesfull")
            return
        }

        localStorage.setItem('authToken',data.token)
        dispatch(checkUserStatus(data.token));
        navigate(-2,{replace:true})
    })

}
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange}
            name ="username"
            type={"text"}
            placeholder="Enter username"></input>

            <input  onChange={handleChange}
            name ="password"
            type={"text"}
            placeholder="Enter password"></input>
   <input type={'submit'} value ={"Submit"}></input>

            </form>
    </div>
  )


}