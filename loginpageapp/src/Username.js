let Username = ({usernameInput, setUsernameInput}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
      <input 
        type="text" 
        placeholder="Username"
        
        value={usernameInput}
        onChange={(e)=>setUsernameInput(e.target.value)}
      />
        
    </form>
  )
}

export default Username