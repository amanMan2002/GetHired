import express, { json } from 'express'
import { connect } from 'mongoose'
import User from '../Database/userModel.js'
import { hash } from 'bcryptjs'
import cors from 'cors'

const app = express()
app.use(json())
app.use(cors())


connect('mongodb://localhost:27017/GetHired', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected')
}).catch(err => {
  console.error('MongoDB connection error:', err)
})


app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password } = req.body

   
    const existingUser = await findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    
    const hashedPassword = await hash(password, 10)

   
    const user = new User({
      name,
      email,
      password: hashedPassword
    })

    await user.save()
    res.status(201).json({ message: 'User registered successfully' })
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message })
  }
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})