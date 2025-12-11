import React from 'react'

export default function MainCarousel() {
  return (
    <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/assets/carousel-1.png" className="d-block w-100" alt="Banca Moderna" style={{height: '500px', objectFit: 'cover', filter: 'blur(2px)'}} />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
            <h5>Infraestructura Moderna</h5>
            <p>Disfruta de nuestras sucursales diseñadas para ti.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/assets/carousel-2.png" className="d-block w-100" alt="Estudiantes Felices" style={{height: '500px', objectFit: 'cover', filter: 'blur(2px)'}} />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
            <h5>Siempre Conectados</h5>
            <p>Banca en línea accesible desde cualquier lugar del campus.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/assets/carousel-3.png" className="d-block w-100" alt="Pagos Rápidos" style={{height: '500px', objectFit: 'cover', filter: 'blur(2px)'}} />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
            <h5>Pagos al Instante</h5>
            <p>Tecnología para agilizar tu día a día.</p>
          </div>
        </div>
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
