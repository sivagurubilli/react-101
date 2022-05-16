import Logo from  "./components/button"
import  Links  from "./components/link"
import Button from "./components/button"

import './App.css'

function App(){

  const linksContent = ['Services',"Proects",'About']
  return(
    <div className="app">
      <div className="nav">
        <Logo/>
        <Links linkarr={linksContent}/>
        <Button text ="Contact"/>

      </div>
    </div>
  )
}


export default App