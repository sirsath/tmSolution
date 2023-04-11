import React from 'react'
import { Link } from 'react-router-dom'

export default function Topbar() {
  return <>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Topbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link className='nav-link' to="/login">Login</Link>
            <Link className='nav-link' to="/register">Register</Link>
          </div>
        </div>
      </div>
    </nav>

  </>
}
