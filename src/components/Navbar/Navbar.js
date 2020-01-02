import React, { useEffect, useState } from "react"
import styles from "./Navbar.module.css"
import { Hamburger, Cross } from "../Shapes"

const { navbar, navbarLogo, navbarEnd, blink, drawer } = styles

const Drawer = () => {
  useEffect(() => {
    document.body.classList.add("fix")
    return () => {
      document.body.classList.remove("fix")
    }
  }, [])

  return (
    <div className={drawer}>
      <div className="container">
        <a href="#about">About</a>
        <a href="#sponsors">Sponsors</a>
        <a href="#themes">Themes</a>
        <a href="#prizes">Prizes</a>
        <a href="#timeline">Timeline</a>
        <a href="#contact">Contact</a>
        <button>Register</button>
      </div>
    </div>
  )
}

export default () => {
  const [showDrawer, setShowDrawer] = useState(false)

  const handleShowDrawer = () => setShowDrawer(true)
  const handleHideDrawer = () => setShowDrawer(false)

  let displayText = showDrawer ? (
    <Cross onClick={handleHideDrawer} />
  ) : (
    <div className={navbarEnd}>
      <button>Register</button>
      <Hamburger onClick={handleShowDrawer} />
    </div>
  )

  return (
    <>
      <div className="container">
        <nav className={navbar}>
          <div className={navbarLogo}>
            <span>&gt;</span>
            <span className={blink}>_</span>
          </div>
          {displayText}
        </nav>
      </div>
      {showDrawer && <Drawer />}
    </>
  )
}
