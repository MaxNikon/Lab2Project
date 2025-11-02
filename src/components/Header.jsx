import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="navbar navbar-expand-lg container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/assets/logo-no-background.png" alt="logo" className="logo me-2" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/register">Regístrate</Link></li>
            <li className="nav-item"><Link className="nav-link btn btn-primary ms-2" to="#">Acceso</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
