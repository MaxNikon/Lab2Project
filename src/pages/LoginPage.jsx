import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage(){
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [apiError, setApiError] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function validate(values){
    const errs = {}
    if(!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errs.email = 'Correo inválido.'
    if(!values.password || values.password.length < 8) errs.password = 'La contraseña debe tener al menos 8 caracteres.'
    return errs
  }

  function handleChange(e){
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: undefined }))
    setApiError('');
  }

  async function handleSubmit(e){
    e.preventDefault()
    const v = validate(form)
    setErrors(v)
    if(Object.keys(v).length === 0){
      setLoading(true);
      try {
        // 1. Llamada al endpoint de login
        const response = await fetch(`http://localhost:3000/v1/public/client/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept-Language': 'es' 
            },
            body: JSON.stringify({
                email: form.email.trim(),
                password: form.password
            })
        });

        const data = await response.json();

        // 2. Verificamos si la respuesta fue exitosa (Status 200-299)
        if (response.ok) {
            console.log('Login exitoso:', data);
            
            // 3. Guardamos el token y la info del usuario
            if (data.data && data.data.jwt) {
                localStorage.setItem('token', data.data.jwt);
                localStorage.setItem('user', JSON.stringify(data.data));
            }

            // 4. Redireccionamos al Dashboard
            navigate('/dashboard');
        } else {
            // Manejo de errores (ej. credenciales incorrectas)
            setApiError(data.message || 'Error al iniciar sesión');
        }

      } catch (error) {
        console.error('Error de red:', error);
        setApiError('Error de conexión con el servidor.');
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <main className="py-5">
      <div className="container">
        <h2 className="mb-3">Acceso</h2>

        {submitted ? (
          <div className="alert alert-success">Has iniciado sesión. Redirigiendo...</div>
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
