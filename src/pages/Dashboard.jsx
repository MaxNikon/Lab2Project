import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard(){
  const navigate = useNavigate()
  const [movements, setMovements] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [user, setUser] = useState(null)

  React.useEffect(() => {
    // Cargar usuario del localStorage
    const storedUser = localStorage.getItem('user')
    if(storedUser) {
      setUser(JSON.parse(storedUser))
    }

    fetchMovements()
  }, [])

  async function fetchMovements() {
    try {
      const token = localStorage.getItem('token')
      if(!token) {
        navigate('/login')
        return
      }

      const response = await fetch(`/v1/client/movement?page=1&page_size=10&`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      const data = await response.json()
      
      if(response.ok) {
        setMovements(data.data || [])
      } else {
        setError(data.message || 'Error al cargar movimientos')
      }
    } catch (err) {
      console.error(err)
      setError('Error de conexión')
    } finally {
      setLoading(false)
    }
  }

  function handleLogout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/login')
  }

  const saldoTotal = movements.length > 0 ? movements[0].balance : 0

  return (
    <main className="py-5">
      <div className="container">
        <h2 className="mb-4">Panel de usuario</h2>

        <div className="row g-4">
          <div className="col-12 col-lg-8">
            <div className="card mb-4">
              <div className="card-body d-flex flex-column flex-md-row align-items-start gap-3">
                <div className="flex-fill">
                  <h5 className="card-title">Saldo actual</h5>
                  <p className="display-6 text-primary">
                    {new Intl.NumberFormat('es-VE', { style: 'currency', currency: 'VES' }).format(saldoTotal)}
                  </p>
                  <p className="text-muted">Último movimiento registrado</p>
                </div>
                <div className="d-flex gap-2">
                  <button className="btn btn-primary" onClick={() => navigate('/transfer')}>Transferir</button>
                  <button className="btn btn-outline-secondary">Pagar</button>
                </div>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Movimientos recientes</h5>
                {loading ? (
                  <p>Cargando movimientos...</p>
                ) : error ? (
                  <div className="alert alert-danger">{error}</div>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-sm table-hover">
                      <thead>
                        <tr>
                          <th>Fecha</th>
                          <th>Descripción</th>
                          <th>Cuenta</th>
                          <th className="text-end">Monto</th>
                        </tr>
                      </thead>
                      <tbody>
                        {movements.map(mov => (
                          <tr key={mov.id}>
                            <td>{new Date(mov.created_at).toLocaleDateString()} {new Date(mov.created_at).toLocaleTimeString()}</td>
                            <td>{mov.description}</td>
                            <td>{mov.account_number.slice(-4)}</td>
                            <td className={`text-end ${mov.multiplier > 0 ? 'text-success' : 'text-danger'}`}>
                              {mov.multiplier > 0 ? '+' : '-'} {new Intl.NumberFormat('es-VE', { style: 'currency', currency: 'VES' }).format(mov.amount)}
                            </td>
                          </tr>
                        ))}
                        {movements.length === 0 && (
                          <tr>
                            <td colSpan="4" className="text-center">No hay movimientos registrados.</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>

          <aside className="col-12 col-lg-4">
            <div className="card mb-4">
              <div className="card-body">
                <h6 className="card-title">Accesos rápidos</h6>
                <div className="list-group list-group-flush">
                  <button className="list-group-item list-group-item-action">Cuentas</button>
                  <button className="list-group-item list-group-item-action" onClick={() => navigate('/transfer')}>Transferencias</button>
                  <button className="list-group-item list-group-item-action">Pagos</button>
                  <button className="list-group-item list-group-item-action">Tarjetas</button>
                  <button className="list-group-item list-group-item-action">Movimientos</button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h6 className="card-title">Perfil</h6>
                {user ? (
                   <>
                    <p className="mb-1"><strong>{user.first_name} {user.last_name}</strong></p>
                    <p className="mb-1 text-muted small">{user.email}</p>
                   </>
                ) : (
                  <p>Cargando usuario...</p>
                )}
                <button className="btn btn-outline-secondary btn-sm mt-3 w-100">Ver perfil</button>
                <button className="btn btn-danger btn-sm mt-2 w-100" onClick={handleLogout}>Cerrar sesión</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
