import {useState} from 'react'
const Password = ({passwordInput, setPasswordInput, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="search here"
        value={passwordInput}
        onChange={(e)=>setPasswordInput(e.target.value)}
      />
      <button
        type="submit"
      >
      </button>
    </form>
  )
}

export default Password