import React, { useEffect } from "react"

export default () => {
  const links = [
    "About",
    "Sponsors",
    "Themes",
    "Prizes",
    "Timeline",
    "Register",
    "Contact",
  ]

  useEffect(() => {
    const $navbarBurgers = document.querySelectorAll(".navbar-burger")

    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          const target = el.dataset.target
          const $target = document.getElementById(target)
          el.classList.toggle("is-active")
          $target.classList.toggle("is-active")
        })
      })
    }
  }, [])

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <h4>MJ Hack Revolution</h4>
          </div>

          <div
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>

        <div id="navbar" className="navbar-menu">
          <div className="navbar-end">
            {links.map(link => (
              <a href={`#/${link}`} key={link} className="navbar-item">
                {link}
              </a>
            ))}

            <div className="navbar-item">
              <div className="button is-black">
                <strong>Register Now!</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
