import React from "react"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            className="name"
            tabIndex={0}
          >
            Portfolio.
          </div>
          <div className="links-wrapper">
            <button>Work</button>
            <button>Skills</button>
            <button>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
