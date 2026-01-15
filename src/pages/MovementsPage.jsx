import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function MovementsPage() {
  const navigate = useNavigate()
  const [movements, setMovements] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [filter, setFilter] = useState('all') 

  useEffect(() => {
    fetchMovements()
  }, [page, pageSize, filter])

  async function fetchMovements() {
    try {
      setLoading(true)
      const token = localStorage.getItem('token')
      if (!token) {
        navigate('/login')
        return
      }

      let url = `/v1/client/movement?page=${page}&page_size=${pageSize}`
      if (filter === 'positive') url += '&multiplier=1'
      if (filter === 'negative') url += '&multiplier=-1'

      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      const data = await response.json()
      
      if (response.ok) {
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

  function handleNextPage() {
    setPage(p => p + 1)
  }

  function handlePrevPage() {
    setPage(p => Math.max(1, p - 1))
  }

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Historial de Movimientos</h2>
        <div className="d-flex align-items-center gap-3">
          <div className="btn-group" role="group">
            <button 
              type="button" 
              className={`btn btn-outline-secondary ${filter === 'all' ? 'active' : ''}`}
              onClick={() => { setFilter('all'); setPage(1); }}
            >
              Todos
            </button>
            <button 
              type="button" 
              className={`btn btn-outline-success ${filter === 'positive' ? 'active' : ''}`}
              onClick={() => { setFilter('positive'); setPage(1); }}
            >
              Ingresos
            </button>
            <button 
              type="button" 
              className={`btn btn-outline-danger ${filter === 'negative' ? 'active' : ''}`}
              onClick={() => { setFilter('negative'); setPage(1); }}
            >
              Egresos
            </button>
          </div>

          <div className="d-flex align-items-center gap-2">
            <label className="text-muted">Mostrar:</label>
            <select 
              className="form-select w-auto" 
              value={pageSize} 
              onChange={(e) => {
                setPageSize(Number(e.target.value))
                setPage(1)
              }}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          {loading && movements.length === 0 ? (
            <p>Cargando movimientos...</p>
          ) : error ? (
            <div className="alert alert-danger">{error}</div>
          ) : (
            <>
              <div className="table-responsive">
                <table className="table table-hover">
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
                        <td colSpan="4" className="text-center">No hay movimientos registrados en este periodo con el filtro seleccionado.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-3">
                <button 
                  className="btn btn-outline-secondary" 
                  onClick={handlePrevPage} 
                  disabled={page === 1 || loading}
                >
                  Anterior
                </button>
                <span>Página {page}</span>
                <button 
                  className="btn btn-outline-secondary" 
                  onClick={handleNextPage} 
                  disabled={movements.length < pageSize || loading}
                >
                  Siguiente
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
