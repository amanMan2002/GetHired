import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

function RegisterForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await response.json()
      if (response.ok) {
        alert(data.message)
        navigate('/homePage')
      } else {
        alert(data.message || 'Registration failed')
      }
    } catch (err) {
      alert('Server error')
    }
  }
  

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
      <Card sx={{ minWidth: 350, maxWidth: 400, p: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Register
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              margin="normal"
              fullWidth
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Register
            </Button>
          </form>
        </CardContent>
        <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2 }}>
          Already have an account? <Button onClick={() => navigate('/login')} color="primary">Login</Button>
        </Typography>
      </Card>
    </Box>
  )
}

export default RegisterForm