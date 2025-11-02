import React, { useState } from 'react'

export default function RegisterPage(){
  const [form, setForm] = useState({ username: '', cedula: '', password: '', password2: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function validate(values){
    const errs = {}
    if(!values.username || values.username.trim().length < 3) errs.username = 'El usuario debe tener al menos 3 caracteres.'
    if(!values.cedula || !/^[0-9]+$/.test(values.cedula)) errs.cedula = 'La cédula debe ser numérica.'
    if(!values.password || values.password.length < 6) errs.password = 'La clave debe tener al menos 6 caracteres.'
    if(values.password !== values.password2) errs.password2 = 'Las claves no coinciden.'
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
      // aquí iría la llamada a la API
      console.log('Registro:', form)
      setSubmitted(true)
    }
  }

  return (
    <main className="py-5">
      <div className="container">
        <h2 className="mb-3">Ingresa tus datos</h2>

        {submitted ? (
          <div className="alert alert-success">Registro completado. Revisa tu correo para confirmar.</div>
        ) : (
          <form onSubmit={handleSubmit} className="row g-3" noValidate>
            <div className="col-md-6">
              <label className="form-label">Usuario</label>
              <input name="username" value={form.username} onChange={handleChange} required className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
              {errors.username && <div className="invalid-feedback">{errors.username}</div>}
            </div>

            <div className="col-md-6">
              <label className="form-label">Cédula</label>
              <input name="cedula" value={form.cedula} onChange={handleChange} required className={`form-control ${errors.cedula ? 'is-invalid' : ''}`} />
              {errors.cedula && <div className="invalid-feedback">{errors.cedula}</div>}
            </div>

            <div className="col-md-6">
              <label className="form-label">Clave de acceso</label>
              <input name="password" type="password" value={form.password} onChange={handleChange} required className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>

            <div className="col-md-6">
              <label className="form-label">Repetir clave de acceso</label>
              <input name="password2" type="password" value={form.password2} onChange={handleChange} required className={`form-control ${errors.password2 ? 'is-invalid' : ''}`} />
              {errors.password2 && <div className="invalid-feedback">{errors.password2}</div>}
            </div>

            <div className="col-12">
              <button className="btn btn-primary">Crear cuenta</button>
            </div>
          </form>
        )}
      </div>
    </main>
  )
}
