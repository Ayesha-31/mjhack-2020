import React from "react"
import styles from "./Navbar.module.css"

import { Hamburger, Cross } from "../Shapes"

const { navbar, navbarLogo, navbarEnd, blink } = styles

export default () => {
  // const links = [
  //   { text: "About", url: "about" },
  //   { text: "Sponsors", url: "sponsors" },
  //   { text: "Themes", url: "themes" },
  //   { text: "Prizes", url: "prizes" },
  //   { text: "Timeline", url: "timeline" },
  //   { text: "Register", url: "register" },
  //   { text: "Contact", url: "contact" },
  // ]

  return (
    <div className="container">
      <nav className={navbar}>
        <div className={navbarLogo}>
          <span>&gt;</span>
          <span className={blink}>_</span>
        </div>
        <div className={navbarEnd}>
          <button>Register</button>
          <Hamburger />
        </div>
      </nav>
    </div>
  )
}
