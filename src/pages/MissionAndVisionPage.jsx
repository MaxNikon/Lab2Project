import React from 'react'

export default function MissionAndVisionPage() {
    return (
        <main className='py-5 bg-white text-black'>
            <div className='.container'>
                <h2 className='card mb-3 text-center bg-primary'>Informacion</h2>
                <div className='row'>
                    <div className='col'>
                        <div className='h2 ms-5 me-3 text-start'>Mision</div>
                        <div className='card p-3 ms-3 me-3 text-center bg-primary'>
                            Somos una confiable institución financiera comprometida con los estudiantes universitarios, brindando soluciones financieras ágiles y eficientes. Nuestra misión es facilitar la gestión de sus recursos y contribuir al crecimiento económico y personal de nuestros clientes.
                        </div>
                    </div>
                    <div className='col'>
                        <div className='h2 me-5 ms-3 text-end'>Vision</div>
                        <div className='card p-3 me-3 text-center bg-primary'>
                            Queremos ser la principal opción financiera para estudiantes universitarios en el país. Deseamos ser reconocidos por nuestros servicios innovadores, la calidad de atención al cliente y nuestro compromiso con la educación y el desarrollo social.
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}