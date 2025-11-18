import React from 'react'

const services = [
    { title: 'Transferencias entre estudiantes sin comisión', desc: 'El Banco Universitario ofrece un servicio de transferencias entre estudiantes sin costo alguno, con el objetivo de facilitar el intercambio de dinero entre los estudiantes universitarios. Este servicio permite transferir dinero de manera rápida, segura y eficiente, lo que permite a los estudiantes contar con una alternativa más para realizar sus pagos y transacciones.' },
    { title: 'Depósitos en efectivo', desc: 'El Banco Universitario permite a los estudiantes realizar depósitos en efectivo de manera sencilla y cómoda en cualquiera de sus sucursales. Este servicio está disponible las 24 horas del día, los 7 días de la semana, lo que permite a los estudiantes realizar sus depósitos en cualquier momento que lo necesiten.' },
    { title: 'Retiros en efectivo', desc: 'El Banco Universitario también permite a los estudiantes realizar retiros en efectivo de manera rápida y segura. Los estudiantes pueden realizar retiros en cualquiera de las sucursales del banco, con la tranquilidad de que sus fondos están seguros y protegidos.' },
    { title: 'Pago de matrícula estudiantil', desc: "El Banco Universitario también ofrece un servicio de pago de matrícula estudiantil, que permite a los estudiantes universitarios pagar sus matrículas de manera rápida y sencilla. Este servicio se realiza en línea y está disponible las 24 horas del día, lo que permite a los estudiantes realizar sus pagos en cualquier momento que lo necesiten." },
    { title: 'Cobro de becas estudiantiles', desc: "El Banco Universitario también permite a los estudiantes universitarios cobrar sus becas estudiantiles de manera sencilla y eficiente. Este servicio está disponible en cualquiera de las sucursales del banco, lo que permite a los estudiantes acceder a sus fondos de manera rápida y segura." }
]

export default function Services() {
  return (
    <section id="services" className="py-5">
      <div className="container">
        <h2 className="mb-4" style={{textAlign: 'center'}}>Servicios Ofrecidos</h2>
        <div className="row">
          {services.map((f, i) => (
            <div key={i} className="mb-3">
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