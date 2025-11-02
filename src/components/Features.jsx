import React from 'react'

const features = [
  {title: 'Cuentas sin comisiones', desc: 'Apertura rápida, 0 comisiones en mantenimiento para estudiantes.'},
  {title: 'Tarjetas con beneficios', desc: 'Descuentos en librerías, transporte y cafeterías universitarias.'},
  {title: 'Préstamos educativos', desc: 'Planes flexibles con tasas preferenciales para estudiar.'}
]

export default function Features() {
  return (
    <section id="features" className="py-5">
      <div className="container">
        <h2 className="mb-4">Beneficios para tu vida universitaria</h2>
        <div className="row">
          {features.map((f, i) => (
            <div key={i} className="col-md-4 mb-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{f.title}</h5>
                  <p className="card-text">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
