const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');


const userRoutes = require('./routes/user');
const generalRoutes = require('./routes/general');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

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

app.use('/api/homepage', generalRoutes)


app.use('/api/user', userRoutes);



app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})