import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function LeftNav(){
  const navigate = useNavigate()
  const hasToken = !!localStorage.getItem('authToken')

  function handleLogout(){
    localStorage.removeItem('authToken')
    navigate('/')
  }

  return (
    <nav className="left-nav d-flex flex-column bg-white border-end">
      <div className="p-3 d-flex align-items-center">
        <img src="/assets/banco-universitario-website-favicon-color.png" alt="logo" style={{height:36}} />
        <strong className="ms-2">Banca Uni</strong>
      </div>

      <ul className="nav flex-column px-3">
        <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/transfer">Transferencias</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/accounts">Cuentas</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/payments">Pagos</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/transactions">Movimientos</Link></li>
      </ul>

      {hasToken && (
        <div className="p-3 mt-auto">
          <button className="btn btn-outline-secondary w-100" onClick={handleLogout}>Cerrar sesión</button>
        </div>
      )}
    </nav>
  )
}
