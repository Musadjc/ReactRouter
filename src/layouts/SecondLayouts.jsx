import Aside from "../components/Aside"
import Footer from "../components/Aside"
import { Outlet } from 'react-router-dom'

function mainLayouts() {
  return (
    <>
    <Aside />
    <Outlet />
    <Footer />
    </>
  )
}

export default mainLayouts
