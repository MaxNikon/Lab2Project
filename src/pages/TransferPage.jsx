import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function TransferPage(){
  const [form, setForm] = useState({ amount: '', account_number: '', description: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  function validate(values){
    const errs = {}
    const amt = Number(values.amount)
    if(!values.amount || isNaN(amt) || amt <= 0) errs.amount = 'Ingrese un monto válido mayor que 0.'
    if(!values.account_number || !/^[0-9A-Za-z]{8,32}$/.test(values.account_number)) errs.account_number = 'Número de cuenta inválido (8-32 caracteres alfanuméricos).'
    if(values.description && values.description.length > 250) errs.description = 'La descripción es demasiado larga.'
    return errs
  }

  function handleChange(e){
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  async function handleSubmit(e){
    e.preventDefault()
    const v = validate(form)
    setErrors(v)
    if(Object.keys(v).length !== 0) return

    const payload = {
      amount: Number(form.amount),
      account_number: form.account_number,
      description: form.description || ''
    }

    setLoading(true)
    try{
      
      const token = localStorage.getItem('authToken')
      const res = await fetch('/api/transfers', {
        method: 'POST',
        headers: Object.assign({ 'Content-Type': 'application/json' }, token ? { Authorization: `Bearer ${token}` } : {}),
        body: JSON.stringify(payload)
      })

      if(!res.ok){
        const err = await res.json().catch(()=>({ message: 'Error en la transferencia' }))
        throw new Error(err.message || 'Transferencia fallida')
      }

      const data = await res.json().catch(()=>({}))
      setSubmitted(true)
      setForm({ amount: '', account_number: '', description: '' })
      
      setTimeout(()=>{ navigate('/dashboard') }, 1200)
    }catch(error){
      setErrors(prev => ({ ...prev, form: error.message }))
    }finally{
      setLoading(false)
    }
  }

  return (
    <main className="py-5">
      <div className="container">
        <h2 className="mb-3">Realizar transferencia</h2>

        {submitted ? (
          <div className="alert alert-success">Transferencia enviada correctamente. Redirigiendo al dashboard...</div>
        ) : (
          <div className="row justify-content-center">
            <div className="col-lg-6">
              {errors.form && <div className="alert alert-danger">{errors.form}</div>}
              <form onSubmit={handleSubmit} className="row g-3" noValidate>

                <div className="col-12">
                  <label className="form-label">Monto</label>
                  <input name="amount" type="number" step="0.01" min="0" value={form.amount} onChange={handleChange} required className={`form-control ${errors.amount ? 'is-invalid' : ''}`} />
                  {errors.amount && <div className="invalid-feedback">{errors.amount}</div>}
                </div>

                <div className="col-12">
                  <label className="form-label">Número de cuenta</label>
                  <input name="account_number" value={form.account_number} onChange={handleChange} required className={`form-control ${errors.account_number ? 'is-invalid' : ''}`} />
                  <div className="form-text">Usa el número completo (ej: 54321098765432109876)</div>
                  {errors.account_number && <div className="invalid-feedback">{errors.account_number}</div>}
                </div>

                <div className="col-12">
                  <label className="form-label">Descripción (opcional)</label>
                  <input name="description" value={form.description} onChange={handleChange} className={`form-control ${errors.description ? 'is-invalid' : ''}`} />
                  {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                </div>

                <div className="col-12">
                  <button className="btn btn-primary" disabled={loading}>{loading ? 'Enviando...' : 'Enviar transferencia'}</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
