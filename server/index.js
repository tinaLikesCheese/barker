const express = require ('express');
const app = express();
const path = require('path'); 
const bodyParser = require('body-parser');
const PORT = 3003;

app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')));

app.post('/dog', (req, res) => {
  console.log(req.body);
  res.sendStatus(201); 
})


app.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`))