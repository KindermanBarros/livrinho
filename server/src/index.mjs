import express from 'express'
import dotenv from 'dotenv'
import process from 'process'

dotenv.config()

const app = express()

const port = process.env.PORT
const googleApiKey = process.env.GOOGLE_API_KEY

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`)
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/key', (req, res) => {
  res.send(googleApiKey)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
