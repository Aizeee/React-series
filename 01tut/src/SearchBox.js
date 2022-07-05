const SearchBox = ({search, setSearch}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
      <input className="searchForm"
        id = 'search'
        type="text"
        role='searchbox'
        placeholder='search here'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
    </form>
  )
}

export default SearchBox