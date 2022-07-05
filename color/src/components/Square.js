
const Square = ({search,setSearch}) => {
  return (
    <section
        className="square"
        style={{backgroundColor:search}}
    >
        <p>{search? search : 'Empty Value'}</p>
    </section>
  )
}

Square.defaultProps={
    search: 'empty color value'
}

export default Square

