import React, { useState } from 'react'

export default function Register(){
  const [form, setForm] = useState({ name: '', email: '', password: '', studentId: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e){
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e){
    e.preventDefault()
    
    console.log('Registro:', form)
    setSubmitted(true)
  }

  return (
    <section id="register" className="py-5">
      <div className="container">
        <h2 className="mb-3">Regístrate</h2>
        <p className="mb-4">Crea tu cuenta universitaria en minutos. Rellena los datos y te contactaremos.</p>

        {submitted ? (
          <div className="alert alert-success">Gracias por registrarte. Revisa tu correo para confirmar.</div>
        ) : (
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Nombre completo</label>
              <input name="name" value={form.name} onChange={handleChange} required className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Correo electrónico</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Contraseña</label>
              <input name="password" type="password" value={form.password} onChange={handleChange} required minLength={6} className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">ID estudiantil (opcional)</label>
              <input name="studentId" value={form.studentId} onChange={handleChange} className="form-control" />
            </div>
            <div className="col-12">
              <button className="btn btn-primary">Crear cuenta</button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
