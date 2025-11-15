import React, { useState } from 'react'

export default function RegisterPage(){
  // Form field names in code are English (per request) while labels/messages remain Spanish
  const [form, setForm] = useState({ firstName: '', lastName: '', idNumber: '', birthDate: '', phone: '', email: '', password: '', confirmPassword: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function validate(values){
    const errs = {}
    if(!values.firstName || values.firstName.trim().length < 2) errs.firstName = 'Ingrese al menos 2 caracteres para los nombres.'
    if(!values.lastName || values.lastName.trim().length < 2) errs.lastName = 'Ingrese al menos 2 caracteres para los apellidos.'
    if(!values.idNumber || !/^[0-9]+$/.test(values.idNumber)) errs.idNumber = 'La cédula debe ser numérica.'
    if(!values.birthDate) errs.birthDate = 'La fecha de nacimiento es obligatoria.'
    if(!values.phone || !/^[0-9()+ \-]{7,20}$/.test(values.phone)) errs.phone = 'Teléfono inválido.'
    if(!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errs.email = 'Correo inválido.'
    if(!values.password || values.password.length < 6) errs.password = 'La contraseña debe tener al menos 6 caracteres.'
    if(values.password !== values.confirmPassword) errs.confirmPassword = 'Las contraseñas no coinciden.'
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
      // preparar payload para backend: enviar solo la contraseña (no el campo de confirmación)
      const payload = { ...form }
      delete payload.confirmPassword
      // aquí iría la llamada a la API con `payload`
      console.log('Payload a enviar:', payload)
      setSubmitted(true)
    }
  }

  return (
    <main className="py-5">
      <div className="container">
        <h2 className="mb-3">Regístrate</h2>

        {submitted ? (
          <div className="alert alert-success">Registro completado. Revisa tu correo para confirmar.</div>
        ) : (
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form onSubmit={handleSubmit} className="row g-3" noValidate>
            <div className="col-md-6">
              <label className="form-label">Nombres</label>
              <input name="firstName" value={form.firstName} onChange={handleChange} required className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} />
              {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
            </div>

            <div className="col-md-6">
              <label className="form-label">Apellidos</label>
              <input name="lastName" value={form.lastName} onChange={handleChange} required className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} />
              {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
            </div>

            <div className="col-md-6">
              <label className="form-label">Cédula</label>
              <input name="idNumber" value={form.idNumber} onChange={handleChange} required className={`form-control ${errors.idNumber ? 'is-invalid' : ''}`} />
              {errors.idNumber && <div className="invalid-feedback">{errors.idNumber}</div>}
            </div>

            <div className="col-md-6">
              <label className="form-label">Fecha de nacimiento</label>
              <input name="birthDate" type="date" value={form.birthDate} onChange={handleChange} required className={`form-control ${errors.birthDate ? 'is-invalid' : ''}`} />
              {errors.birthDate && <div className="invalid-feedback">{errors.birthDate}</div>}
            </div>

            <div className="col-md-6">
              <label className="form-label">Teléfono</label>
              <input name="phone" type="tel" value={form.phone} onChange={handleChange} required className={`form-control ${errors.phone ? 'is-invalid' : ''}`} />
              {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>

            <div className="col-md-6">
              <label className="form-label">Correo electrónico</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="col-md-6">
              <label className="form-label">Contraseña</label>
              <input name="password" type="password" value={form.password} onChange={handleChange} required className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>

            <div className="col-md-6">
              <label className="form-label">Repetir contraseña</label>
              <input name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} required className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} />
              {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
            </div>

                <div className="col-12">
                  <button className="btn btn-primary">Crear cuenta</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
