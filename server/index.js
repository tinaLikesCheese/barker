const express = require ('express');
const app = express();
const path = require('path'); 
const bodyParser = require('body-parser');
const db = require('./db/index.js');
const PORT = 3003;

app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')));

app.get('/allDogs', (req, res) => {
  db.findAll((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  }
)})


app.post('/dog', (req, res) => {
  db.save(req.body, (err) => {
    if(err) {
      res.status(500).send(err); 
    } else {
      res.sendStatus(201); 
    }
  });
})


app.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`))