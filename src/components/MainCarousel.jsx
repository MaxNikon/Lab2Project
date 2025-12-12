import React from 'react'

const services = [
  { 
    title: 'Transferencias entre estudiantes sin comisión', 
    desc: 'El Banco Universitario ofrece un servicio de transferencias entre estudiantes sin costo alguno, facilitando el intercambio de dinero. Este servicio permite transferir fondos de manera rápida, segura y eficiente.' 
  },
  { 
    title: 'Depósitos en efectivo', 
    desc: 'El Banco Universitario permite realizar depósitos en efectivo de manera sencilla y cómoda en cualquiera de sus sucursales. Disponible las 24 horas del día, los 7 días de la semana para tu conveniencia.' 
  },
  { 
    title: 'Retiros en efectivo', 
    desc: 'Realiza retiros en efectivo de manera rápida y segura en cualquiera de las sucursales del banco, con la tranquilidad de que sus fondos están siempre disponibles.' 
  },
  { 
    title: 'Pago de matrícula estudiantil', 
    desc: "Ofrecemos el servicio de pago de matrícula estudiantil en línea, rápido y sencillo. Disponible las 24 horas del día para que puedas realizar tus pagos cuando lo necesites." 
  },
  { 
    title: 'Cobro de becas estudiantiles', 
    desc: "Cobra tus becas estudiantiles de manera eficiente en cualquiera de nuestras sucursales, permitiendo el acceso a tus fondos de forma ágil y segura." 
  }
]

export default function MainCarousel() {
  const images = [
    '/assets/carousel-1.png',
    '/assets/carousel-2.png',
    '/assets/carousel-3.png',
    '/assets/carousel-4.png',
    '/assets/carousel-5.png'
  ]

  return (
    <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {services.map((_, index) => (
          <button 
            key={index} 
            type="button" 
            data-bs-target="#mainCarousel" 
            data-bs-slide-to={index} 
            className={index === 0 ? "active" : ""} 
            aria-current={index === 0 ? "true" : "false"} 
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {services.map((service, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img 
              src={images[index % images.length]} 
              className="d-block w-100" 
              alt={service.title} 
              style={{height: '600px', objectFit: 'cover', filter: 'brightness(0.6) blur(3px)'}} 
            />
            <div className="carousel-caption d-block carousel-caption-centered">
              <h2 className="display-5 fw-bold mb-3">{service.title}</h2>
              <p className="lead fs-4">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  )
}
