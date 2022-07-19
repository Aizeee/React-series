
import {BrowserRouter as Router,Routes,Route, useNavigate} from 'react-router-dom'

import {useState, useEffect} from "react"
import axios from 'axios';
import Add from "./components/Add.js"
import See from "./components/See.js"
import Layout from './components/Layout';




function App() {

  const [ball,setBall]= useState({})
  const [ballBody,setBallBody]= useState("")
  const [search,setSearch]= useState("")
  const navigate=useNavigate()


  useEffect(()=>{
    const a = async ()=>{
        
            const response = await axios.get("http://localhost:3550/listball")
            setBall(response.data)
            console.log(response.data)
    }
    a()
    }
    , [])

  const handleSubmit= async(e)=>{
  const newBall = {ballBody}
    try{
      const response = await axios.post("http://localhost:3550/listball", newBall)
      setBall(prev => ({...prev, ballBody}))
      setBallBody('')
      navigate("/See")
    }catch (err){
      console.log(err.response)
    }
  }

return (
    <Routes>
        <Route path="/" element={<Layout
            search={search}
            setSearch={setSearch}
        />}>
                    <Route index element={<Add ball={ball}/>} />
                    <Route path="/See" element={<See/>}/>
                    
        </Route>
    </Routes>
  );
}

export default App;