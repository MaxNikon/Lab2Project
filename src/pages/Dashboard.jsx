import React from 'react'

export default function Dashboard(){
  // Pantalla de inicio simulada tras login
  return (
    <main className="py-5">
      <div className="container">
        <h2 className="mb-4">Panel de usuario</h2>

        <div className="row g-4">
          <div className="col-12 col-lg-8">
            <div className="card mb-4">
              <div className="card-body d-flex flex-column flex-md-row align-items-start gap-3">
                <div className="flex-fill">
                  <h5 className="card-title">Saldo total</h5>
                  <p className="display-6 text-success">$ 4,320.50</p>
                  <p className="text-muted">Cuenta corriente: $ 1,200.00 · Ahorros: $ 3,120.50</p>
                </div>
                <div className="d-flex gap-2">
                  <button className="btn btn-primary">Transferir</button>
                  <button className="btn btn-outline-secondary">Pagar</button>
                </div>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Movimientos recientes</h5>
                <div className="table-responsive">
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th>Fecha</th>
                        <th>Descripción</th>
                        <th>Cuenta</th>
                        <th className="text-end">Monto</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2025-11-10</td>
                        <td>Pago tarjeta</td>
                        <td>Corriente</td>
                        <td className="text-end text-danger">- $120.00</td>
                      </tr>
                      <tr>
                        <td>2025-11-07</td>
                        <td>Depósito nómina</td>
                        <td>Ahorros</td>
                        <td className="text-end text-success">+ $1,500.00</td>
                      </tr>
                      <tr>
                        <td>2025-11-03</td>
                        <td>Compra supermercado</td>
                        <td>Corriente</td>
                        <td className="text-end text-danger">- $45.30</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <aside className="col-12 col-lg-4">
            <div className="card mb-4">
              <div className="card-body">
                <h6 className="card-title">Accesos rápidos</h6>
                <div className="list-group list-group-flush">
                  <button className="list-group-item list-group-item-action">Cuentas</button>
                  <button className="list-group-item list-group-item-action">Transferencias</button>
                  <button className="list-group-item list-group-item-action">Pagos</button>
                  <button className="list-group-item list-group-item-action">Tarjetas</button>
                  <button className="list-group-item list-group-item-action">Movimientos</button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h6 className="card-title">Perfil</h6>
                <p className="mb-1">Usuario: usuario@ejemplo.com</p>
                <p className="mb-1">Cliente desde: 2023</p>
                <button className="btn btn-outline-secondary btn-sm mt-2">Ver perfil</button>
                <button className="btn btn-link btn-sm mt-2 text-danger">Cerrar sesión</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
