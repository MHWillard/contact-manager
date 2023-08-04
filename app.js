const Connection = require('./src/models/Connection');
const Query = require('./src/services/Query');
const conn = new Connection();
const query = new Query();

const express = require('express')
const app = express()

var cors = require('cors');
app.use(cors())

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
    //const command = "SELECT * FROM contacts"
    //const result = await query.selectQuery(conn, command);
    result = [{name: "dummyname", email: "dummy@dummyemail.com", number: "555-1234", job: "Test Dummy", status: "Friend", interests: "getting hit, testing vehicles", notes: "Not too bright"}, {name: "bill billson", email: "dingo@dummyemail.com", number: "555-1234", job: "Simple Dingo", status: "Friend", interests: "eating meat", notes: "Animal?"}]
    //res.json(result.rows)
    res.json(result)
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
  conn.client.end()
})

//export default app;
module.exports = app;