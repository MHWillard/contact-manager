const Connection = require('./src/models/Connection');
const Query = require('./src/services/Query');
const conn = new Connection();
const query = new Query();

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
  res.json({name: 'user'})
})

app.get('/contacts', async (req, res) => {
  conn.setClient();
  const command = "SELECT * FROM contacts"
  try {
  const result = await query.selectQuery(conn.getClient(), command);
  res.status(200).json(result.rows[0])
  } catch (e) {
    next(e);
  }
  //res.status(200).json({name: 'user', id: 1})
  conn.kill()
})

//export default app;
module.exports = app;