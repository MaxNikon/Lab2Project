import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage(){
  // Fields in code are English (email, password); labels/messages in Spanish
  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function validate(values){
    const errs = {}
    if(!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errs.email = 'Correo inválido.'
    if(!values.password || values.password.length < 6) errs.password = 'La contraseña debe tener al menos 6 caracteres.'
    return errs
  }

  function handleChange(e){
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  function handleSubmit(e){
    e.preventDefault()
    const v = validate(form)
    setErrors(v)
    if(Object.keys(v).length === 0){
      const payload = { email: form.email, password: form.password }
      // Aquí iría la llamada al backend (login)
      console.log('Login payload:', payload)
      // Simular login exitoso -> redirigir al dashboard
      navigate('/dashboard')
    }
  }

  return (
    <main className="py-5">
      <div className="container">
        <h2 className="mb-3">Acceso</h2>

        {submitted ? (
          <div className="alert alert-success">Has iniciado sesión (simulado). Redirigiendo...</div>
        ) : (
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form onSubmit={handleSubmit} className="row g-3" noValidate>
                <div className="col-12">
                  <label className="form-label">Correo electrónico</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="col-12">
                  <label className="form-label">Contraseña</label>
                  <input name="password" type="password" value={form.password} onChange={handleChange} required className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>

                <div className="col-12">
                  <button className="btn btn-primary">Iniciar sesión</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
