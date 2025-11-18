import React from 'react'

export default function Footer(){
  return (
    <footer className="py-4 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <div>© {new Date().getFullYear()} BancaU — Universidad</div>
            <div><i className="fa-brands fa-facebook"/><a className="text-white" href="">@bancouniversitariove</a></div>
            <div><i className="fa-brands fa-instagram"/><a className="text-white" href="">@bancouniversitariove</a></div>
            <div><i className="fa-brands fa-x-twitter"/><a className="text-white" href="">@bancouniversitariove</a></div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="mb-2">Contacto</h6>
            <address className="mb-0 text-white">
              Av. Universidad, Edificio Banco Universitario, piso 12<br />
              Caracas, Venezuela
            </address>
          </div>
          <div className="col-md-4 text-md-end">
            <div>Teléfono: <a className="text-white" href="tel:+582125555555">+58 212-555-5555</a></div>
            <div>Fax: <a className="text-white" href="fax:+582125555556">+58 212-555-5556</a></div>
            <div>Email: <a className="text-white" href="mailto:info@bancouniversitario.com.ve">info@bancouniversitario.com.ve</a></div>
            <div className="mt-2">
              <a className="text-white me-3" href="#">Términos</a>
              <a className="text-white me-3" href="#">Privacidad</a>
              <a className='text-white' href='/info'>Sobre Nosotros</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
