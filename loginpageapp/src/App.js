import './App.css';
import Username from "./Username"
import Password from "./Password"
import {useState} from "react";

function App() {
  
  const[usernameInput, setUsernameInput]=useState('')
  const[passwordInput, setPasswordInput]=useState('')

  let handleSubmit=(e)=>{
    console.log("submitted")
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <h2>Login Page of Iz Bank</h2>
      </header>
       */}
      

      <Username
        usernameInput={usernameInput}
        setUsernameInput={setUsernameInput}
      />
      <Password
        passwordInput={passwordInput}
        setPasswordInput={setPasswordInput}
        handleSubmit={handleSubmit}
      />

      
    </div>
  );
  
}

export default App;
