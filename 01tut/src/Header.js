import React from 'react'
// function Header(){}
const Header = ({banana}) =>{
  const headerStyle ={
    backgroundColor : "royalblue", color:'#fff'
  }
  return (
    <header style={headerStyle}>
        <h1> {banana}</h1>
    </header>
  )
}

Header.defaultProps = {
  banana: "Dafault Title"
}

export default Header