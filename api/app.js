const express = require('express')
const app = express()
const port = 5000

app.get('/api/questions', (req, res) => {
  res.json({ 
    questions: [
      { 
        title: "The title of the question 1",
        options: [
          {
            title : "the 1 option of the question 1"
          },
          {
            title : "the 2 option of the question 1"
          },
          {
            title : "the 3 option of the question 1"
          }
        ]
      },
      { 
        title: "The title of the question 2",
        options: [
          {
            title : "the 1 option of the question 2"
          },
          {
            title : "the 2 option of the question 2"
          },
          {
            title : "the 3 option of the question 2"
          }
        ]
      }
    ]
  })
})

app.get('/', (req, res) => {
    res.send('The app is supposed to be used by client')
})
    

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})