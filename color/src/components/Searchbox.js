const Searchbox = ({search, setSearch}) => {
  return (
    <form>
        <label>input color</label>
       <input onSubmit={(e)=>e.preventDefault()}
            type='text'
            required
            autoFocus
            placeholder='Type Color'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
        /> 
    </form>

  )
}

export default Searchbox