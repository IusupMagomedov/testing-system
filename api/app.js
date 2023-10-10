const express = require('express')
const app = express()
const port = 5000

app.get('/api', (req, res) => {
  res.json({ username: 'Flavio' })
})

app.get('/', (req, res) => {
    res.send('The app is suppose to be used by client')
})
    

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})