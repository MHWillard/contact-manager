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
  try {
    conn.setClient();
    conn.connect();
    const command = "SELECT * FROM contacts"
    const result = await query.selectQuery(conn, command);
    res.json(result.rows)
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
  conn.kill()
})

//export default app;
module.exports = app;