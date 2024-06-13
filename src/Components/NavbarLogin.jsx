import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLogin = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">KSRTC-App</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            
                            <Link class="nav-link" to="/signup">New User Registration</Link>
                            <Link class="nav-link" to="/">Login Page</Link>
                            
                        </div>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default NavbarLogin
