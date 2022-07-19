import { Outlet } from "react-router-dom"
import Header from './Header.js'
import Navbar from './Navbar.js'
import Footer from "./Footer.js"



const Layout = () => {
  return (
    <div className="App">
        <Header/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout