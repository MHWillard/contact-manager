import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
  res.json({name: 'user'})
})

export default app;