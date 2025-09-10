import { Route, Routes } from "react-router"
import Home from "./Home"
import AddJob from "./AddJob"
import "./App.css"

const App=()=>{
  return(
    <> 
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/addjobs" element={<AddJob/>}/>
    </Routes>
    <div className="credit">
      <p>Created by Gopaal on 10/August/2025</p>
    </div>
    </>
  )
}


export default App