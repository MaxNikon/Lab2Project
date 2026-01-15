import React from "react";

const objectives = [
    {
        desc: 'Brindar a los estudiantes universitarios un servicio eficiente y de calidad en la gestión de sus recursos financieros, a través de nuestros canales digitales y nuestros puntos de atención presencial.'
    },
    {
        desc: 'Fomentar el uso de nuestras plataformas digitales para hacer transferencias entre estudiantes sin comisión, depósitos y retiros en efectivo, ofreciendo herramientas tecnológicas fáciles y seguras.'
    },
    {
        desc: 'Promover la educación financiera de los estudiantes universitarios, a través de charlas, talleres y capacitaciones sobre temas como el ahorro, la inversión y el uso responsable del crédito.'
    },
    {
        desc: 'Establecer alianzas estratégicas con universidades y empresas para ofrecer beneficios exclusivos a nuestros clientes, tales como descuentos en matrículas, becas, prácticas laborales, entre otros.'
    },
    {
        desc: 'Mantener una cultura de innovación y mejora continua en nuestros procesos, productos y servicios, para estar siempre a la vanguardia de las necesidades de nuestros clientes y del mercado.'
    }
]

export default function ObjectiveCarousel() {
    const background = '/assets/LetterBG.svg'

    return (
        <div id="objectiveCarousel" className='carousel slide' data-bs-ride='carousel'>
            <div className="carousel-indicators">
                {objectives.map((_, index) => (
                    <button
                    key={index}
                    type="button"
                    data-bs-target="#objectiveCarousel"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active": ""}
                    aria-current={index === 0 ? "true": "false"}
                    aria-label={`Slide ${index+1}`}
                    ></button>
                ))}
            </div>
            <div className="carousel-inner">
                {objectives.map((objective, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active': ''}`}>
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <img
                                src={background}
                                className="d-block w-100"
                                alt="Background"
                                style={{objectFit: 'cover', height: 'auto'}}
                            />
                        </div>
                        <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
                            <p className="d-none d-lg-block fs-4 text-black">{objective.desc}</p>
                            <p className="d-lg-none fs-6 text-black">{objective.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#objectiveCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#objectiveCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>
    )
}