import { Outlet } from "react-router"
import Header from "../static/Header"
import Footer from "../static/Footer"


const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout