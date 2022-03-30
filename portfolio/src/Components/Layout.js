import React from "react"
import Navbar from "./Nav"
import "../Styles/Mains.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <main>{children}</main>
    </>
  )
}
export default Layout
