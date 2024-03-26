import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from 'react-router-dom'

function mainLayouts() {
  return (
    <>
    <Header />
    <Footer />
    <Outlet />
    </>
  )
}

export default mainLayouts
