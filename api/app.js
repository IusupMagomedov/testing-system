const express = require('express')
const app = express()
const port = 5000


const userRoutes = require('./routes/user')

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

app.get('/api/homepage', (req, res) => {
  res.json({
    title: "The titile of homepage", 
    text: "The text of homepage"
  })
})




app.use('/api/user', userRoutes);



app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})